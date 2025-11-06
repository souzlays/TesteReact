interface ProductCardProps {
    name: string;
    image: string;
    model: string;
    loadIndex: string;
    cars: string[];
    pattern: string;
    speedRating: string;
    temperature: string;
    traction: string;
    treadwear: number;
  }
    
  export default function ProductCard({
    name,
    image,
    model,
    traction,
    speedRating,
    loadIndex,
    temperature,
    pattern,
    treadwear
  }: ProductCardProps) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:flex-row w-full">
        {/* Seção da imagem */}
        <div className="bg-gray-50 p-8 flex flex-col items-center justify-center lg:w-[300px] flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="w-48 h-48 object-contain mb-4"
          />
          <p className="font-bold text-xl text-gray-900">{model}</p>
        </div>
        
        {/* Divisor vertical - escondido no mobile */}
        <div className="hidden lg:block w-px bg-gray-200 flex-shrink-0"></div>
        
        {/* Divisor horizontal - visível no mobile */}
        <div className="block lg:hidden h-px bg-gray-200"></div>
        
        {/* Seção de informações */}
        <div className="flex-1 p-6 lg:p-8 min-w-0">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">{name}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-4 lg:gap-y-6">
            {/* Coluna 1 */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Durabilidade</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">{treadwear}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-1">Tração</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">{traction}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-1">Temperatura</p>
              <p className="text-xl lg:text-2xl font-bold text-gray-900">{temperature}</p>
            </div>
            
            {/* Coluna 2 */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Índice de velocidade</p>
              <p className="text-lg lg:text-xl font-bold text-gray-900">{speedRating}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-1">Capacidade de Carga</p>
              <p className="text-lg lg:text-xl font-bold text-gray-900">{loadIndex}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-1">Desenho</p>
              <p className="text-lg lg:text-xl font-bold text-gray-900">{pattern}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }