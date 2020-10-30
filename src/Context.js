import React, {
    createContext,
    useReducer,
    useState,
  } from "react";


  const storeProducts = {
    '1': {
        name:"Zakir",
        message:"Hey! how are you",
        timestamp:"35 minutes ago",
        profilePic:"https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-9/70423356_2575213176035667_8385328182584147968_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeF8GKe_q8GMmcnlnpu0Zl8ZsJQVECUhorCwlBUQJSGisEx_RmCPj1-Xbhrl3kyj1jkp2EVt9H65RHGKXJfkjWeU&_nc_ohc=LkFKlgppZfoAX9JP0o7&_nc_ht=scontent.flhe7-1.fna&oh=7d06b4731f1a8dd8a93efe6d157cf71b&oe=5FC1A2B0"
    },
    '2': {
        name:"Saleem",
        message:"Hey! how are you",
        timestamp:"35 minutes ago",
        profilePic:"https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-9/100055398_1495576157273514_1338455407370174464_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeGlM0yyMTXUc7Gvtmk7YFNjpAN_d54TGeWkA393nhMZ5U1wzABtEUecJ8OSN3uVIwVROQCZotk11iDO40Noo9KA&_nc_ohc=ZEnKexSoU4kAX8b1LMI&_nc_ht=scontent.flhe7-1.fna&oh=67f4e81de4c1a61405e24a5d8e6d711a&oe=5FC1D29F"
    },
    '3': {
         name:"Hikmat",
         message:"Congratulations Zakir for newly born baby",
        timestamp:"35 minutes ago",
        profilePic:"https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-9/80643967_159824421915990_7666893399366041600_n.jpg?_nc_cat=104&ccb=2&_nc_sid=19026a&_nc_eui2=AeGeyshv85IUa75cBn2Mel8cXg-FcbDLHvNeD4VxsMse8625VnxGlA_a09UTtfVYjdKy7kuAIsaPg7Ot61k3NjbG&_nc_ohc=TeaGwTSU6sAAX-DXwgM&_nc_ht=scontent.flhe7-1.fna&oh=c42576a274f7e5fa0782221c080693f5&oe=5FC021D6"
    },
    '4': {
        name:"Wajid",
        message:"Hey! Millionare",
        timestamp:"35 minutes ago",
        profilePic:"https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-9/88246825_549791025631325_7155773474890317824_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEwLs4AFgE1Z5X_P8mZALuqhaqfWg4QyuqFqp9aDhDK6nYKn5zDkTlfRoz3RlM-kbaDRlNX0SU7SgDszvVk3z1q&_nc_ohc=bDvcMWfp0QwAX9O7owb&_nc_ht=scontent.flhe7-1.fna&oh=2c8be1d2fba2467368c53567540d70ae&oe=5FC11B79"
   },


  };
  
  export const GlobalContext = createContext();

  
  export const ProductProvider = ({ children }) => {
    
  
    return (
      <GlobalContext.Provider
        value={{
          storeProducts,      
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };