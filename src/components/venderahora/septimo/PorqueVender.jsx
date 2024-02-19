import { useForm } from "react-hook-form";
import ToggleButtonsContainer from "./ToggleButtonsContainer";

export default function PorqueVender() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    return (
        <form onSubmit={handleSubmit(onsubmit)} className="max-w-[800px] border border-[var(--color-borde)] rounded-lg flex flex-col px-8 py-4">
            <span className="text-2xl font-bold">Información de la vivienda</span>
            <ToggleButtonsContainer />
            <label htmlFor="direccion" className="text-[11px] mt-2">
                <span className="text-[var(--color-texto-secundario)]">¿Cuánto esperas recibir por la vivienda? <span className="text-[var(--color-rojo)]">*</span></span>
                <br />
                <input type="number" {...register("precio", { required: true })} id="precio" className="w-full h-10 pl-4" />
            </label>
            {(errors.precio) && (<span className="text-[var(--color-rojo)] text-sm mt-4">Por favor completa todos los campos</span>)}
            <button type="submit" className="w-full h-9 rounded-md mt-4 text-[var(--blanco)] bg-gradient-to-r from-400 via-600 to-800 bg-pos-0 hover:bg-pos-50 active:bg-pos-100 bg-size-200 transition-all duration-150">Continuar</button>
        </form>

    )
}