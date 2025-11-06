import Master2 from '@/component/laws/Master2';
import Law1991 from '@/component/laws/Law1991';
import React from 'react';
import Law2012  from '@/component/laws/Law2012';

export default async function Page({ params }) {
  const { slug } = await params

  //const law = lawsData.find(l => l.slug === slug);

  if (slug === "value-added-tax-act") {
    return (
      <Master2>
        <Law1991 />
      </Master2>
    );
  }else if(slug === "value-added-tax-and-supplementary-duty-act") {
    return (
      <Master2>
        <Law2012 />
      </Master2>
    )
  }

  return (
    <Master2>
      <div className="p-6 text-gray-700">
        <h1 className="text-2xl font-semibold mb-3 capitalize">{slug.replace(/-/g, " ")}</h1>
        <p>No specific content found for this law yet.</p>
      </div>
    </Master2>
  );
}