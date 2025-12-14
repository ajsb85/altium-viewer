/**
 * PCB Engine - Layer Constants
 * 
 * Extracted layer kind enums and layer name mappings.
 */
"use strict";

(function (pcb) {

    // Stack kind enum
    pcb.StackKind = {
        BoardShape: 0,
        Background: 1,
        Other: 2,
        DrillDrawing: 3,
        Mechanical: 4,
        KeepOut: 5,
        DrillGuide: 6,
        Plane: 7,
        SolderMask: 8,
        Paste: 9,
        Signal: 10,
        Current: 11,
        Overlay: 12,
        MultiLayer: 13,
        Holes: 14,
        Ignored: 15,
    };

    // Layer position enum
    pcb.LayerPosition = {
        Bottom: 0,
        Internal: 1,
        Top: 2,
    };

    // Layer name to kind mapping (from be map)
    pcb.layerKindMap = {
        "Board Shape": { kind: "System", stackKind: "BoardShape" },
        "Background Layer": { kind: "System", stackKind: "Background" },
        "Multi Layer": { kind: "Other", stackKind: "MultiLayer" },
        "Top Overlay Layer": { kind: "Overlay|Top|LayerPair", stackKind: "Overlay" },
        "Bottom Overlay Layer": { kind: "Overlay|Bottom|LayerPair", stackKind: "Overlay" },
        "Top Layer": { kind: "Signal|Top", stackKind: "Signal" },
        "Bottom Layer": { kind: "Signal|Bottom", stackKind: "Signal" },
        "Top Paste Layer": { kind: "Paste|Top|LayerPair", stackKind: "Paste" },
        "Bottom Paste Layer": { kind: "Paste|Bottom|LayerPair", stackKind: "Paste" },
        "Top Solder Layer": { kind: "Solder|Top|LayerPair", stackKind: "SolderMask" },
        "Bottom Solder Layer": { kind: "Solder|Bottom|LayerPair", stackKind: "SolderMask" },
        "Pad Holes Layer": { kind: "System", stackKind: "Holes" },
        "Via Holes Layer": { kind: "System", stackKind: "Holes" },
        "Drill Guide Layer": { kind: "Other", stackKind: "DrillGuide" },
        "Keep Out Layer": { kind: "Other", stackKind: "KeepOut" },
        "Drill Drawing Layer": { kind: "Other", stackKind: "DrillDrawing" },
    };

})(window.pcb = window.pcb || {});
