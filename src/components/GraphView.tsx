import React, { useEffect, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

interface GraphViewProps {
    data: {
        nodes: { id: string, name: string, val: number }[];
        links: { source: string, target: string }[];
    }
}

const GraphView: React.FC<GraphViewProps> = ({ data }) => {
    const fgRef = useRef<any>();

    useEffect(() => {
        // Adjust zoom on mount if needed
        if (fgRef.current) {
            fgRef.current.d3Force('charge').strength(-100);
        }
    }, []);

    return (
        <div className="w-full h-full">
            <ForceGraph2D
                ref={fgRef}
                graphData={data}
                nodeLabel="name"
                nodeColor={() => "#a855f7"} // Purple-500
                linkColor={() => "#475569"} // Slate-600
                backgroundColor="rgba(0,0,0,0)"
                width={500} // Ideally responsive
                height={400}
                onNodeClick={node => {
                    window.location.href = `/wiki/${node.id}`;
                }}
            />
        </div>
    );
};

export default GraphView;
