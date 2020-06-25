import React from 'react';
import { DashBoardCardProps } from '../../../Types/interfaces';

export default function DashboardCard({ title, toWhere }: DashBoardCardProps) {
    return (
        <div style={{ backgroundColor: 'white', width: 200, height: 200 }}>
            {title}
        </div>
    );
}
