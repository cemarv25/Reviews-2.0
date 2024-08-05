'use server';

const Title = ({
  text,
  customClasses,
}: {
  text: string;
  customClasses?: string;
}) => {
  return <h1 className={`text-5xl mb-5 font-bold ${customClasses}`}>{text}</h1>;
};

export default Title;
