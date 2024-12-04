import { PrismaClient } from "@prisma/client";
import { promises } from "dns";
const prisma = new PrismaClient({log:['info','query','error']});

async function main():Promise<void>  {
    await prisma.post.create({
        data: {
            title:"Title of past",
            content: "Content of past",
            published:true,
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
}
main()
.then(async ()=>{
    console.log("done with the query")
    await prisma.$disconnect();
 })
 .catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect();
    process.exit(1)
 })