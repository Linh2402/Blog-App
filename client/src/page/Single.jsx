import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6285739/pexels-photo-6285739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Perspiciatis, ullam!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo
          eos necessitatibus nulla odit perferendis non, a dolorum ex. Saepe
          praesentium natus nemo dolor, veritatis aliquam ad. Quod assumenda
          perspiciatis iusto unde deleniti, ut amet animi, ad repudiandae
          accusantium sit error sequi laboriosam qui quibusdam necessitatibus,
          reiciendis voluptatem!
          <br />
          <br />
          Alias voluptatibus culpa debitis architecto voluptatem doloremque.
          Autem, ex expedita impedit tempora doloribus ab eveniet. Tenetur,
          corrupti eligendi perferendis dolore ad magnam hic natus laboriosam
          vero eius doloremque qui, dolorem eaque deleniti optio quod! Quasi
          sed, a nulla accusantium iure nemo itaque provident enim non impedit
          praesentium similique. Suscipit dolorem porro vitae possimus aliquam
          excepturi esse deserunt nulla commodi numquam vel debitis veritatis
          voluptates, fuga rerum corrupti, odio eveniet.
          <br />
          <br />
          Voluptatem, deserunt consequatur perspiciatis fuga repudiandae
          nesciunt, provident ea dolorem exercitationem reiciendis voluptates
          dolorum nam eaque magni, maxime inventore! Vero modi repellat ea
          minima esse numquam optio iste tenetur harum nesciunt, dolorem odit
          incidunt possimus perspiciatis cupiditate ex laudantium sed saepe
          facilis reprehenderit tempora, est veniam ratione excepturi. Provident
          fugiat, suscipit ut nemo iste soluta mollitia, qui quaerat enim quas
          itaque consequatur. Voluptates quidem dolorem officia temporibus ut
          cumque tempora eligendi quisquam veritatis odit! Nesciunt assumenda
          tempora tempore nam ad ipsam porro consequatur doloribus similique cum
          totam recusandae commodi est velit sapiente possimus quas, ex
          pariatur!
          <br />
          <br />
          Laudantium unde harum ea adipisci voluptatem veritatis nulla itaque
          culpa quas incidunt eaque, quasi sapiente, mollitia voluptas minus
          totam doloremque officiis a, cupiditate modi qui exercitationem
          doloribus! Reiciendis ipsa ut commodi. Quo, quia aliquid! Quaerat
          libero cupiditate a quasi laborum eos officiis error omnis tempore in?
          Nesciunt non sunt dolore ipsum vel, eius accusantium enim, magnam odio
          neque numquam vitae nihil debitis impedit corrupti deleniti quam unde
          placeat pariatur dolorem doloremque quia reprehenderit molestias?
          Optio, quasi eos blanditiis ullam iste eveniet quae, delectus debitis
          consequuntur tempora ea.
        </p>
      </div>
      <Menu />
    </div>
  );
};
