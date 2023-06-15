import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FeedBack = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
        const feedback =  data.feedback
    fetch(`https://assignment12-server-developer-nieem.vercel.app/feedback-classes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Feedback Send !!',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Okay '
            })
           
          }
        
      })
    console.log(data);
  };
  return (
    <div className="text-center">
      <Helmet>
        <title>
          Feedback - Elevate Your Game with Expert Coaching and Training
        </title>
      </Helmet>
      <form  onSubmit={handleSubmit(onSubmit)}>
       
        <textarea {...register("feedback")} placeholder="Feedback" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
        <div >
        <input className="btn btn-primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
