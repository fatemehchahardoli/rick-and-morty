/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Dana: "Dana",
            DanaMedium: "Dana Medium",
            DanaDemiBold: "Dana DemiBold",
            MorabbaLight: "Morabba Light",
            MorabbaMedium: "Morabba Medium",
            MorabbaBold: "Morabba Bold",
         },
         container:{
            center:true,
            padding:{
               DEFAULT:"1rem",
               lg:"0.625rem"
            }
         }
        
      },
      screens:{
       'xs':'480px',
       'sm':'640px',
       'md':'768px',
       'lg':'1024',
       'xl':'1280px',
      }
   },
   plugins: [   function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
   },],
};
