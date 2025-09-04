import 'bootstrap/dist/css/bootstrap.min.css';
import Bai1 from './assets/Components/Bai1/Bai1';
import Bai2 from './assets/Components/Bai2/Bai2';
export default function App() {
  return (
    <div>
      <Bai1></Bai1>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Bai2 />
    </div>
    </div>
  )
}
