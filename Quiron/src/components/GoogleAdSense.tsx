import React, { useEffect } from 'react';

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  adLayout?: string;
  fullWidthResponsive?: boolean;
  className?: string;
}

export function GoogleAdSense({
  adSlot,
  adFormat = 'auto',
  adLayout,
  fullWidthResponsive = true,
  className = ''
}: GoogleAdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-0000000000000000" // SUBSTITUIR pelo seu Google AdSense ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      ></ins>
    </div>
  );
}

// Banner Horizontal (Topo/Rodapé)
export function AdBannerHorizontal({ className = '' }: { className?: string }) {
  return (
    <GoogleAdSense
      adSlot="1234567890" // SUBSTITUIR pelo slot ID do AdSense
      adFormat="horizontal"
      className={className}
    />
  );
}

// Banner Vertical (Sidebar)
export function AdBannerVertical({ className = '' }: { className?: string }) {
  return (
    <GoogleAdSense
      adSlot="0987654321" // SUBSTITUIR pelo slot ID do AdSense
      adFormat="vertical"
      className={className}
    />
  );
}

// Banner Responsivo (Conteúdo)
export function AdBannerResponsive({ className = '' }: { className?: string }) {
  return (
    <GoogleAdSense
      adSlot="1357924680" // SUBSTITUIR pelo slot ID do AdSense
      adFormat="auto"
      fullWidthResponsive={true}
      className={className}
    />
  );
}

// Banner Quadrado (Feed)
export function AdBannerSquare({ className = '' }: { className?: string }) {
  return (
    <GoogleAdSense
      adSlot="2468013579" // SUBSTITUIR pelo slot ID do AdSense
      adFormat="rectangle"
      className={className}
    />
  );
}

// Banner In-Feed (Entre conteúdo)
export function AdBannerInFeed({ className = '' }: { className?: string }) {
  return (
    <GoogleAdSense
      adSlot="9876543210" // SUBSTITUIR pelo slot ID do AdSense
      adFormat="fluid"
      adLayout="in-article"
      className={className}
    />
  );
}
