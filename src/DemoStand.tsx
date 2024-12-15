import { DemoItem } from "./DemoItem";

export const DemoStand = () => (
  <div style={wrapperStyle}>
    <DemoItem title="Обычный плавный скролл" scrollSnapType={false} scrollBehavior={false} />
    <DemoItem title="Портальный скролл" scrollSnapType scrollBehavior={false} />
    <DemoItem title="Липкий скролл" scrollSnapType scrollBehavior />
    <DemoItem title="Вырвать мозг скролл" scrollSnapType={false} scrollBehavior />
  </div>
  )

const wrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  marginBottom: '150px'
}
  