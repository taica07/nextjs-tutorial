'use client';

import { useEffect } from 'react';
import { createTask } from '../../utils/actions';
import { useFormState, useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error');
      return;
    }
    if (state.message) {
      toast.success('task created');
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2"> {state.message} </p> : null} */}
      <div className=" join w-full ">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here..."
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;

//SubmitButton component

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={`${
        pending ? 'text-red-600' : ''
      } btn btn-primary join-item uppercase `}
    >
      {pending ? 'please wait...' : 'create task'}
    </button>
  );
}
