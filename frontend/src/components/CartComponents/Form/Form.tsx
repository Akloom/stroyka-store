import styles from "./Form.module.scss"

export const FormCart = ({ create }) => {
    const [value, setValue] = useState("");
    const changeValue = (event) => {
      setValue(event.target.value);
    };
    const onSubmit = (event) => {
      event.preventDefault();
      const task = { name: value,   };
      create(task);
      setValue("");
    };
    return (
      <>
    
      <form className="add-form" onSubmit={onSubmit}>
        <div className="group">
          
          
        </div>
      </form>
      </>
    );  
  };