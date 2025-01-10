const ShapeControls: React.FC<{
  onChangeShape: (shape: string) => void;
  onChangeColor: (color: number) => void;
}> = ({ onChangeShape, onChangeColor }) => (
  <nav className="flex space-x-4 p-4">
    <button onClick={() => onChangeShape('CUBE')} className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">Cube</button>
    <button onClick={() => onChangeShape('SPHERE')} className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md">Sphere</button>
    <button onClick={() => onChangeShape('CYLINDER')} className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md">Cylinder</button>
    <button onClick={() => onChangeColor(0xffff00)} className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md">Yellow</button>
    <button onClick={() => onChangeColor(0xff00ff)} className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-md">Purple</button>
    <button onClick={() => onChangeColor(0x00ff00)} className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md">Green</button>
  </nav>
);

export default ShapeControls;
