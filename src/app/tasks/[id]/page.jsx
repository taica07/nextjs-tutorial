import Link from 'next/link';
import { getTask } from '../../../../utils/actions';
import EditForm from '@/components/EditForm';

const SinglePageTask = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link className="btn btn-accent" href="/tasks">
          Back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SinglePageTask;
