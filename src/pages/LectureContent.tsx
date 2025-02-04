import LecturesLessonsFooter from '../components/Lectures/LecturesLessons/LecturesLessonsFooter/LecturesLessonsFooter'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LectureTitle from '../components/Lectures/LecturesUI/LectureTitle/LectureTitle'
import ILesson from '../types/ILesson'
import Footer from '../components/Footer/Footer'
import LecturesSidebar from '../components/Lectures/LecturesSidebar/LecturesSidebar'
import useTimeOnSite from '../hooks/useTimeOnSite'
import useAppSelector from '../hooks/useAppSelector'
import useNavigation from '../hooks/useNavigation'
import LectureParagraph from '../components/Lectures/LecturesUI/LectureParagraph/LectureParagraph'
import LecturesMenu from '../components/Lectures/LecturesUI/LecturesMenu/LecturesMenu'
import ILecturesItem from '../components/Lectures/LecturesUI/ILecturesList/ILecturesList'
import LecturesSubtitle from '../components/Lectures/LecturesUI/LectureSubtitle/LectureSubtitle'
import ILectureContentData from '../types/ILectureContentData'

const LectureContent = () => {
   const [data, setData] = useState<ILectureContentData>({
      loading: true,
      error: false,
      lesson: null,
   })
   const { moveToPage } = useNavigation();
   const auth = useAppSelector((state) => state.root.auth);

   const { lessonId } = useParams<{ lessonId?: string }>();
   let lessonIndex: number = 0

   if (lessonId) {
      lessonIndex = parseInt(lessonId)
   } else {
      setData(prev => ({ ...prev, error: true }))
   }

   const requestHandler = async (id: number) => {
      try {
         const response = await axios.get<ILesson>(`https://shopify-growth-studio-backend.onrender.com/lesson/${id}`);

         if (response.data) {
            setData((prev) => ({ ...prev, loading: false, lesson: response.data }))
         } else {
            throw new Error("Урок не знайдено");
         }
      } catch (error: any) {
         setData(prev => ({ ...prev, loading: false, error: true }))
      }

   }

   if (auth.user?._id) {
      useTimeOnSite(auth.user?._id)
   }

   useEffect(() => {
      if (!auth.isAuth) {
         moveToPage('Login')
      }

      if (lessonId) {
         setData({
            loading: true,
            error: false,
            lesson: null,
         })
         requestHandler(lessonIndex);
      }
   }, [lessonId]);

   return (
      <div className="flex flex-col min-h-screen relative">
         <div className='absolute top-0 left-0 -z-10 max-sm:hidden'>
            <img src="/images/lecturesBg1.png" alt="Glow" />
         </div>
         <div className='absolute bottom-0 right-0 -z-10 max-sm:bottom-28'>
            <img src="/images/lecturesBg2.png" alt="Glow" />
         </div>
         <div className="container my-24 flex-grow flex bg-primary-Light rounded-2xl gap-6 max-xl:my-3 max-lg:rounded-none max-lg:mt-0 max-sm:p-0 max-sm:gap-4">
            <LecturesSidebar />
            <div className='w-10/12 m-4 bg-primary rounded-2xl p-7 max-lg:w-full max-sm:p-2.5 max-sm:m-2'>
               {
                  data.loading
                     ?
                     <div className="w-20 h-20 rounded-full animate-spin mx-auto border-2 border-secondary border-dashed"></div>
                     :
                     <div>
                        {data.error && <p className='text-2xl text-red-500 pb-10'>Урок не знайдено</p>}
                        {data.lesson &&
                           <LectureTitle >
                              {data.lesson.title}
                           </LectureTitle>
                        }
                        {
                           data.lesson &&
                           data.lesson.content.map((item, index, array) => {
                              if (item.type == 'header' && index != 0) {

                                 if (array[++index].type == item.type) {
                                    return
                                 } else {
                                    return <LecturesSubtitle key={item.text}>{item.text}</LecturesSubtitle>
                                 }
                              } else if (item.type == 'paragraph') {
                                 return <LectureParagraph key={item.text}>{item.text}</LectureParagraph>
                              } else if (item.type == 'list') {
                                 if (item.items.length == 1) {
                                    return
                                 }

                                 return <LecturesMenu key={item.items[0]}>
                                    {
                                       item.items.map(list => (
                                          <ILecturesItem key={list}>{list}</ILecturesItem>
                                       ))
                                    }
                                 </LecturesMenu>
                              }
                           })
                        }
                        <LecturesLessonsFooter id={lessonIndex} />
                     </div>
               }
            </div>
         </div>
         <Footer />
      </div>
   )
}


export default LectureContent