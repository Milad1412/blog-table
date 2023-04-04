type SkeletonProps = {
  height: string
  width: string
  rounded: '4px' | '8px' | '16px' | '100%'
  className?: string
}

// values of height and width must be with units (px, rem, percentage, etc)
const Skeleton: React.FC<SkeletonProps> = ({ height, rounded, width, className }) => {
  return (
    <div
    style={{
      width: width,
      minWidth: width,
      minHeight: height,
      height: height,
      borderRadius: rounded
    }}
      role='status'
      className={`block bg-gray-200 ${className}`}>
    </div>
  )
}

export default Skeleton
