import { HorizontalScrollContainer } from "./HorizontalScrollContainer";

interface DemoItemProps {
  title: string;
  scrollBehavior?: boolean;
  scrollSnapType?: boolean;
}

export const DemoItem = ({ title, scrollBehavior, scrollSnapType }: DemoItemProps) => (
  <div>
    <h2>{title}</h2>
    <h4>{Object.entries({
      scrollBehavior: scrollBehavior && ' scrollBehavior: "smooth" ',
      scrollSnapType: scrollSnapType && ' scrollSnapType: "x mandatory" '
      }).filter(([, value]) => value).map(([, value]) => value).join(" + ") || 'None'}
    </h4>
    <HorizontalScrollContainer scrollBehavior={scrollBehavior} scrollSnapType={scrollSnapType}>
      {Array.from({ length: 20 }, (_, index) => (
        <div key={index} style={scrollItemStyle}>
          Item {index + 1}
        </div>
      ))}
    </HorizontalScrollContainer>
  </div>
)

const scrollItemStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "20px",
  width: "200px",
  height: "200px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f0f0f0",
  cursor: "pointer",
};