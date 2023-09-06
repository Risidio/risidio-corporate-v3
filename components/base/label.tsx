import { twMerge } from 'tailwind-merge';

interface LabelProps extends React.ComponentProps<'label'> {
  className?: string;
}

function Label({ className, ...props }: LabelProps) {
  const classes = twMerge('text-sm text-gray-300 mb-2 block', className);
  return <label className={classes} {...props} />;
}

export { Label };
