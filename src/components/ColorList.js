//BEFORE
// import React from "react";

// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   return (
//     <div>
//       <h1>Top 5 CSS Colors</h1>
//       <ol>
//         <li style={{ color: colors[0] }}>{colors[0]}</li>
//         <li style={{ color: colors[1] }}>{colors[1]}</li>
//         <li style={{ color: colors[2] }}>{colors[2]}</li>
//         <li style={{ color: colors[3] }}>{colors[3]}</li>
//         <li style={{ color: colors[4] }}>{colors[4]}</li>
//       </ol>
//     </div>
//   );
// }

// export default ColorList;


//AFTER
// import React from "react";
// import ColorList from "./ColorList";

// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   const colorElements = colors.map((color => {
//     return <li key={color} style={{color: color}}>color</li>
//   }))

//   return (
//     <div>
//       <h1>Top 5 CSS Colors</h1>
//       <ol>
//         {colorElements}
//       </ol>
//     </div>
//   );
// }

// export default ColorList;

// ColorList component
import React from "react";
import ColorItem from "./ColorItem";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

const colorElements = colors.map((color) => {
  return (
      <div>
        <h1>Top 5 CSS Colors</h1>
        <ol>
            <ColorItem key={color} color={color} />
        </ol>
      </div>
  )});
}

export default ColorList;