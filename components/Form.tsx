import CustomInput from "./CustomInput"

const Form = () => {
  return (
    <form>
        <CustomInput inputType="text" placeholderInput="username" />
        <CustomInput inputType="password" placeholderInput="password" />
    </form>
  )
}

export default Form