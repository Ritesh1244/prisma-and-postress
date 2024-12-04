import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
// const prisma = new PrismaClient({log:['info','query','error']}); --> if you want to see the queries in the console

async function main():Promise<void> {
    await prisma.user.create({
        data:{
            email:"ritesh22111@gmail.com",
            name:"Ritesh",
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