import IMCCalculator from "../../../components/IMCCalculator/IMCCalculator"

export default function ImcPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">IMC Calculator</h1>
      <IMCCalculator />
    </div>
  )
}