import Button from "@/components/Button";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 m-10">

      <h1 className="text-5xl">Bienvenido a MoveCraft!</h1>
      <p>Un generador gratuito de rutinas de ejercicio.</p>

      <div className="flex flex-col justify-center items-center gap-5">
        <p>Pruebalo! Crea tu cuenta fácilmente:</p>
        <Button variant="primary">Crear una Cuenta</Button>
        <p className="text-sm">Si ya tienes una cuenta:</p>
        <Button variant="secondary">Iniciar Sesion</Button>
      </div>

    </div>
  )

}
