import { editTask } from '../../utils/actions';

const EditForm = ({ task }) => {
  const { id, content, completed } = task;

  return (
    <form
      className="max-w-sm p-12 border border-gray-500 rounded-lg "
      action={editTask}
    >
      {/* content */}
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      {/* completed */}
      <div className="form-control my-4">
        <label className="label cursor-pointer " htmlFor="completed">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm "
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        edit
      </button>
    </form>
  );
};

export default EditForm;
