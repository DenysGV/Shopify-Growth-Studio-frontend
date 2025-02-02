interface ILessonHeader {
   type: 'header',
   text: string
}

interface ILessonParagraph {
   type: 'paragraph',
   text: string
}

interface ILessonList {
   type: 'list',
   items: string[]
}

type TContent = ILessonHeader | ILessonParagraph | ILessonList;

export default interface ILesson {
   id: number,
   title: string,
   content: TContent[]
}