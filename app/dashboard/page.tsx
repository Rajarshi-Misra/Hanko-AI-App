import { Logout } from "@/components/Logout";
import { Profile } from "@/components/Profile";
// import { Description } from "@/components/Description";
// import { NewTodo } from "@/components/todos/NewTodo";
// import { TodoItem } from "@/components/todos/TodoItem";
import { prisma } from "@/db";
import { userId } from "../api/todo/route";
// import { Upload } from "@/components/Upload";
// import { Type } from "@/components/Type";
// import { Redesign } from "@/components/Redesign";
import { ImgMediaCard } from "@/components/Item";
import { Form } from "@/components/Form";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default async function Todo() {
  const userID = await userId();

  const items = await prisma.item.findMany({
    where: {
      userId: { equals: userID },
    },
  });
  return (
    <main className="bg-black text-white">
      <div className="w-full flex py-8 px-12 space-x-6 justify-around">
        <Profile />
        <div className="font-bold sm:text-4xl text-2xl">
          <a href="/">HOMEDEC</a>
        </div>
        <Logout />
      </div>
      {/* <div className="bg-slate-300 rounded-3xl py-6  h-[400px] w-[450px] flex flex-col text-slate-800">
        <h1 className="text-3xl text-center">My to dos</h1>
        <NewTodo />
        <ul className="px-6">
          <TodoItem todos={todos} />
        </ul>
      </div> */}
      <div className="sm:grid grid-cols-3 gap-x-4 px-16 py-20">
        <div className="col-span-1 pr-6 text-center">
          <Form />
        </div>

        <div className="col-span-2 space-y-4">
          <div className="text-3xl p-4 font-bold">YOUR DESIGNS</div>
          <div className="sm:grid grid-cols-2 space-y-4">
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt={item.src}
                      image={item.src}
                    />
                    <CardActions>
                      <a
                        href={item.src}
                        target="_blank"
                        className="text-green-600 font-semibold"
                      >
                        DOWNLOAD
                      </a>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
