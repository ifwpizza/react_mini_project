import ModernLayout from './layouts/ModernLayout';
import SplitLayout from './layouts/SplitLayout';
import MinimalLayout from './layouts/MinimalLayout';
import CreativeLayout from './layouts/CreativeLayout';

export default function PortfolioRenderer({ data }) {
  const layoutId = data.selectedLayout?.id || 'modern';

  switch (layoutId) {
    case 'split':    return <SplitLayout data={data} />;
    case 'minimal':  return <MinimalLayout data={data} />;
    case 'creative': return <CreativeLayout data={data} />;
    case 'modern':
    default:         return <ModernLayout data={data} />;
  }
}
