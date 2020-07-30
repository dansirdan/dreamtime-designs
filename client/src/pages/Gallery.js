import React from "react";
import { Link, Route } from "react-router-dom";
import queryString from "query-string";

// const collections = [
//   { name: "Watercolor", collection: [1, 2, 3, 4, 5] },
//   { name: "Pastel", collection: [1, 2, 3, 4, 5] },
//   { name: "Cards", collection: [1, 2, 3, 4, 5] },
//   { name: "Portraits", collection: [1, 2, 3, 4, 5] },
//   { name: "Other", collection: [1, 2, 3, 4, 5] },
// ];

// function Detail ({ match }) {
//     const collection = collections.find(({ name }) => name === match.params.collection)
//       .collection.find((id) => String(id) === match.params.id)

//     return (
//       <div>
//         <p>{collection}</p>
//       </div>
//     )
//   }

// function Collection({ match }) {
//   const collection = collections.find(({ name }) => name === match.params.collection)
// if(collection) {
//   return (
//     <div>
//       <h2>{collection.name}</h2>

//       <ul>
//         {collection.collection.map((number, index) => (
//           <li key={index}>
//             <Link to={`${match.url}/${number}`}>{number}</Link>
//           </li>
//         ))}
//       </ul>

//       <hr />

//       <Route path={`${match.path}/:id`} component={Detail} />
//     </div>
//   );}
//   else {
//     return <div>NOT FOUND</div>
//   }
// }

// const Gallery = ({ match }) => {
//   console.log(match);
//   return (
//     <div>
//       GALLERY
//       <ul>
//         {collections.map((collection) => (
//           <li key={collection.name}>
//             <Link to={`${match.url}/${collection.name}`}>{collection.name}</Link>
//           </li>
//         ))}
//       </ul>
//       <Route path={`${match.path}/:collection`} component={Collection} />
//     </div>
//   );
// };

const Gallery = ({ match, location }) => {
  console.log(match, location);
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  let view = "main";

  if (parsed.collection) {
    // show gallery/collection page
    switch (parsed.collection) {
      case "watercolor":
        view = "watercolor";
        break;

      default:
        view = "NOT FOUND";
    }
  }

  return (
    <div>
      GALLERY
      <h1>CURRENT PAGE: {view}</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
