import './SpeedDialButton.css';
import React, { useState, useCallback, useEffect } from 'react'
import { SpeedDial } from 'primereact/speeddial';

export const SpeedDialButton = () => {
    
    const actionItems = [
        { icon: 'pi pi-pencil', command: () => { } },
        { icon: 'pi pi-calendar-plus', command: () => { } },
        { icon: 'pi pi-image', command: () => { } },
        { icon: 'pi pi-times', command: () => { } }
    ];

    return (
        <div>
            <SpeedDial model={actionItems}  radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} buttonClassName="p-button-help" />
        </div>
    )
}