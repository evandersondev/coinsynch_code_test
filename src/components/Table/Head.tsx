interface HeadProps {
  headers: string[]
}

export function Head({ headers }: HeadProps) {
  return (
    <thead>
      <tr className="text-left text-secondary-500 text-label leading-4">
        <th className="font-normal w-[56px] lg:w-[162px] pl-6">{headers[0]}</th>
        <th className="font-normal">{headers[1]}</th>
        <th className="font-normal">{headers[2]}</th>
        <th className="font-normal">{headers[3]}</th>
        <th className="font-normal w-[104px]">{headers[4]}</th>
      </tr>
    </thead>
  )
}
