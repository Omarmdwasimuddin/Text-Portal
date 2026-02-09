import Master3 from '@/component/laws/Master3';
import ExcisesSaltAct1944 from '@/component/laws/ExcisesSaltAct1944';
import React from 'react';

export default async function Page({ params }) {
  const { slug } = await params;

  if (slug === "excise-and-salt-act-1944") {
    return (
      <Master3>
        <ExcisesSaltAct1944 />
      </Master3>
    );
  }

  return (
    <Master3>
      <div className="p-6 text-gray-700">
        <h1 className="mb-3 text-2xl font-semibold capitalize">{slug.replace(/-/g, " ")}</h1>
        <p>No specific content found for this law yet.</p>
      </div>
    </Master3>
  );
}