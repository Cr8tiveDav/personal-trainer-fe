const problemSolution = [
  {
    title: 'The problem',
    content:
      "Most fitness apps hand you a plan and walk away. Videos play, streaks break, and within weeks you're back to scrolling instead of training. Motivation is unreliable. Showing up is hard when no one's waiting.",
  },
  {
    title: 'Our solution',
    content:
      "A real human on the other end of a call. Your trainer schedules with you, calls when it's time, and guides you through every rep. No pre-recorded videos. No guessing. Just structured sessions, week after week.",
  },
]

const ProblemSolution = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl bg-white px-5 py-6 md:px-10 md:py-20 lg:px-10 xl:px-10">
        <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-[192px]">
          {problemSolution.map((item, index) => (
            <div key={index}>
              <h3 className="mb-2 text-xl font-medium leading-6 text-[#1C1C1C] md:mb-6 md:text-3xl md:font-semibold">
                {item.title}
              </h3>
              <p className="text-base leading-6 text-neutral-600 md:text-xl">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProblemSolution
