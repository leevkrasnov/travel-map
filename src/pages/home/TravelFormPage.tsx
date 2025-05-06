import AddTravelForm from '@/components/home-page/TravelForm'

export default function TravelFormPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative flex flex-col h-full w-full md:w-[450px] md:h-[600px] pt-40 md:pt-14 px-10 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-4xl mr-10">Добавить путешествие</h1>

        <section className="flex flex-col mt-12">
          <AddTravelForm />
        </section>
      </div>
    </div>
  )
}
