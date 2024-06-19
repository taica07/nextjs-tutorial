import prisma from '../../../utils/db';

async function prismaHandlers() {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
}

const PrismaPage = async () => {
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Prisma Example</h1>
      {tasks.map((task) => (
        <h2 key={task.id} className="text-xl py-2">
          ✅{task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaPage;
