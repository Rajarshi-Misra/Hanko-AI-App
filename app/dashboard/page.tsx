import { Logout } from "@/components/Logout";
import { Profile } from "@/components/Profile";
import { prisma } from "@/db";
import { userId } from "../api/todo/route";
import { Form } from "@/components/Form";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
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

      <div className="sm:grid grid-cols-3 gap-x-4 px-16 py-20">
        <div className="col-span-1 pr-6 text-center">
          <Form />
        </div>

        <div className="col-span-2 space-y-4">
          <div className="text-3xl p-4 font-bold">YOUR DESIGNS</div>
          <div className="sm:grid grid-cols-2 space-y-4">
            {items
              .slice(0)
              .reverse()
              .map((item) => {
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
      <div className="w-full text-white">
        IF YOU'VE REACHED THIS FAR, PLEASE DROP A LIKE ON{" "}
        <a href="https://dev.to/rajarshimisra/building-an-ai-webapphomedec-with-hanko-nextjs-prisma-supabase-and-replicate-29cd">
          THIS
        </a>
        , AND A STAR ON{" "}
        <a href="https://github.com/Rajarshi-Misra/Hanko-AI-App">THIS</a>
      </div>
    </main>
  );
}
