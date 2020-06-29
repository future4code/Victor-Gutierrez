import React from 'react';
import { DashBoardCardProps } from '../../../../Types/interfaces';
import { Link } from 'react-router-dom';
import { Card } from './DashboardCard_styles';

export default function DashboardCard({ title, toWhere }: DashBoardCardProps) {
    return (
        <Card>
            <Link to={toWhere}>{title}</Link>
        </Card>
    );
}
