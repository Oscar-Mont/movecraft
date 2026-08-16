import Button from "@/components/Button";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Welcome to MoveCraft</h1>
      <p>A Free and Open Source AI Assisted Exercise Builder</p>
      <div className="flex flex-col justify-center items-center">
        <h1>Get Started!</h1>
        <Button variant="primary">Log in</Button>
        <Button variant="secondary">Create an account</Button>
      </div>

    </div>
  )

}
