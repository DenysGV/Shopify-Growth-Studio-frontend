import { useEffect, useRef } from "react";
import axios from "axios";
import useAppDispatch from "./useAppDispatch";
import { updateTimeSpend } from "../store/Auth/authSlice";

const useTimeOnSite = (userId: string) => {
   const startTime = useRef(Date.now());
   const dispatch = useAppDispatch()

   const sendTimeToServer = async () => {
      const timeDiff: number = Date.now() - startTime.current;
      const totalTime: number = timeDiff / 3600000

      try {
         await axios.post("https://shopify-growth-studio-backend.onrender.com/user-time", {
            userId,
            timeSpent: totalTime, // в часах
         });

         dispatch(updateTimeSpend(totalTime))

      } catch (error) {
         console.error("Ошибка при отправке времени:", error);
      }
   };

   useEffect(() => {
      const handleVisibilityChange = () => {
         if (document.hidden) {
            sendTimeToServer(); // Отправляем данные при уходе
         } else {
            startTime.current = Date.now(); // Обновляем startTime при возвращении
         }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      window.addEventListener("beforeunload", sendTimeToServer);

      return () => {
         sendTimeToServer();
         document.removeEventListener("visibilitychange", handleVisibilityChange);
         window.removeEventListener("beforeunload", sendTimeToServer);
      };
   }, []);

};

export default useTimeOnSite