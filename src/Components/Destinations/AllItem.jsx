import React, { useState } from "react";
import Dcard from "./Dcard";
import Sdata from "./Sdata";

function AllItem() {
  const [items, setItems] = useState(Sdata);
  return (
    <>
      <section className="gallery desi mtop">
        <div className="container">
          <div className="content  destination_content">
            {items.map((item) => {
              return <Dcard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllItem;
