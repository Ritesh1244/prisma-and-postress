import { PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient()

async function main() {
    await prisma.user.update({
        where:{
            id: 1
        },
        data:{
            posts:{
                deleteMany:{
                    published:false
                }
            }
        }
    })
}

main()
 .then(
    async ()=>{
        console.log("Done")
        await prisma.$disconnect()
    }
 )
 .catch(
    async (e)=>{
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    }
 )