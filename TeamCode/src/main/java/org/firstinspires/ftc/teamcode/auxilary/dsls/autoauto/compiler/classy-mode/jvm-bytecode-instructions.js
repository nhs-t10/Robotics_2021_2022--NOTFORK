module.exports = {
    aaload: function() { return [0x32].concat([]) },
    aastore: function() { return [0x53].concat([]) },
    aconst_null: function() { return [0x01].concat([]) },
    aload: function(A) { return [0x19].concat([A]) },
    aload_0: function() { return [0x2a].concat([]) },
    aload_1: function() { return [0x2b].concat([]) },
    aload_2: function() { return [0x2c].concat([]) },
    aload_3: function() { return [0x2d].concat([]) },
    anewarray: function(A,B) { return [0xbd].concat([A,B]) },
    areturn: function() { return [0xb0].concat([]) },
    arraylength: function() { return [0xbe].concat([]) },
    astore: function(A) { return [0x3a].concat([A]) },
    astore_0: function() { return [0x4b].concat([]) },
    astore_1: function() { return [0x4c].concat([]) },
    astore_2: function() { return [0x4d].concat([]) },
    astore_3: function() { return [0x4e].concat([]) },
    athrow: function() { return [0xbf].concat([]) },
    baload: function() { return [0x33].concat([]) },
    bastore: function() { return [0x54].concat([]) },
    bipush: function(A) { return [0x10].concat([A]) },
    breakpoint: function() { return [0xca].concat([]) },
    caload: function() { return [0x34].concat([]) },
    castore: function() { return [0x55].concat([]) },
    checkcast: function(A,B) { return [0xc0].concat([A,B]) },
    d2f: function() { return [0x90].concat([]) },
    d2i: function() { return [0x8e].concat([]) },
    d2l: function() { return [0x8f].concat([]) },
    dadd: function() { return [0x63].concat([]) },
    daload: function() { return [0x31].concat([]) },
    dastore: function() { return [0x52].concat([]) },
    dcmpg: function() { return [0x98].concat([]) },
    dcmpl: function() { return [0x97].concat([]) },
    dconst_0: function() { return [0x0e].concat([]) },
    dconst_1: function() { return [0x0f].concat([]) },
    ddiv: function() { return [0x6f].concat([]) },
    dload: function(A) { return [0x18].concat([A]) },
    dload_0: function() { return [0x26].concat([]) },
    dload_1: function() { return [0x27].concat([]) },
    dload_2: function() { return [0x28].concat([]) },
    dload_3: function() { return [0x29].concat([]) },
    dmul: function() { return [0x6b].concat([]) },
    dneg: function() { return [0x77].concat([]) },
    drem: function() { return [0x73].concat([]) },
    dreturn: function() { return [0xaf].concat([]) },
    dstore: function(A) { return [0x39].concat([A]) },
    dstore_0: function() { return [0x47].concat([]) },
    dstore_1: function() { return [0x48].concat([]) },
    dstore_2: function() { return [0x49].concat([]) },
    dstore_3: function() { return [0x4a].concat([]) },
    dsub: function() { return [0x67].concat([]) },
    dup: function() { return [0x59].concat([]) },
    dup_x1: function() { return [0x5a].concat([]) },
    dup_x2: function() { return [0x5b].concat([]) },
    dup2: function() { return [0x5c].concat([]) },
    dup2_x1: function() { return [0x5d].concat([]) },
    dup2_x2: function() { return [0x5e].concat([]) },
    f2d: function() { return [0x8d].concat([]) },
    f2i: function() { return [0x8b].concat([]) },
    f2l: function() { return [0x8c].concat([]) },
    fadd: function() { return [0x62].concat([]) },
    faload: function() { return [0x30].concat([]) },
    fastore: function() { return [0x51].concat([]) },
    fcmpg: function() { return [0x96].concat([]) },
    fcmpl: function() { return [0x95].concat([]) },
    fconst_0: function() { return [0x0b].concat([]) },
    fconst_1: function() { return [0x0c].concat([]) },
    fconst_2: function() { return [0x0d].concat([]) },
    fdiv: function() { return [0x6e].concat([]) },
    fload: function(A) { return [0x17].concat([A]) },
    fload_0: function() { return [0x22].concat([]) },
    fload_1: function() { return [0x23].concat([]) },
    fload_2: function() { return [0x24].concat([]) },
    fload_3: function() { return [0x25].concat([]) },
    fmul: function() { return [0x6a].concat([]) },
    fneg: function() { return [0x76].concat([]) },
    frem: function() { return [0x72].concat([]) },
    freturn: function() { return [0xae].concat([]) },
    fstore: function(A) { return [0x38].concat([A]) },
    fstore_0: function() { return [0x43].concat([]) },
    fstore_1: function() { return [0x44].concat([]) },
    fstore_2: function() { return [0x45].concat([]) },
    fstore_3: function() { return [0x46].concat([]) },
    fsub: function() { return [0x66].concat([]) },
    getfield: function(A,B) { return [0xb4].concat([A,B]) },
    getstatic: function(A,B) { return [0xb2].concat([A,B]) },
    goto: function(A,B) { return [0xa7].concat([A,B]) },
    goto_w: function(A,B,C,D) { return [0xc8].concat([A,B,C,D]) },
    i2b: function() { return [0x91].concat([]) },
    i2c: function() { return [0x92].concat([]) },
    i2d: function() { return [0x87].concat([]) },
    i2f: function() { return [0x86].concat([]) },
    i2l: function() { return [0x85].concat([]) },
    i2s: function() { return [0x93].concat([]) },
    iadd: function() { return [0x60].concat([]) },
    iaload: function() { return [0x2e].concat([]) },
    iand: function() { return [0x7e].concat([]) },
    iastore: function() { return [0x4f].concat([]) },
    iconst_m1: function() { return [0x02].concat([]) },
    iconst_0: function() { return [0x03].concat([]) },
    iconst_1: function() { return [0x04].concat([]) },
    iconst_2: function() { return [0x05].concat([]) },
    iconst_3: function() { return [0x06].concat([]) },
    iconst_4: function() { return [0x07].concat([]) },
    iconst_5: function() { return [0x08].concat([]) },
    idiv: function() { return [0x6c].concat([]) },
    if_acmpeq: function(A,B) { return [0xa5].concat([A,B]) },
    if_acmpne: function(A,B) { return [0xa6].concat([A,B]) },
    if_icmpeq: function(A,B) { return [0x9f].concat([A,B]) },
    if_icmpge: function(A,B) { return [0xa2].concat([A,B]) },
    if_icmpgt: function(A,B) { return [0xa3].concat([A,B]) },
    if_icmple: function(A,B) { return [0xa4].concat([A,B]) },
    if_icmplt: function(A,B) { return [0xa1].concat([A,B]) },
    if_icmpne: function(A,B) { return [0xa0].concat([A,B]) },
    ifeq: function(A,B) { return [0x99].concat([A,B]) },
    ifge: function(A,B) { return [0x9c].concat([A,B]) },
    ifgt: function(A,B) { return [0x9d].concat([A,B]) },
    ifle: function(A,B) { return [0x9e].concat([A,B]) },
    iflt: function(A,B) { return [0x9b].concat([A,B]) },
    ifne: function(A,B) { return [0x9a].concat([A,B]) },
    ifnonnull: function(A,B) { return [0xc7].concat([A,B]) },
    ifnull: function(A,B) { return [0xc6].concat([A,B]) },
    iinc: function(A,B) { return [0x84].concat([A,B]) },
    iload: function(A) { return [0x15].concat([A]) },
    iload_0: function() { return [0x1a].concat([]) },
    iload_1: function() { return [0x1b].concat([]) },
    iload_2: function() { return [0x1c].concat([]) },
    iload_3: function() { return [0x1d].concat([]) },
    impdep1: function() { return [0xfe].concat([]) },
    impdep2: function() { return [0xff].concat([]) },
    imul: function() { return [0x68].concat([]) },
    ineg: function() { return [0x74].concat([]) },
    instanceof: function(A,B) { return [0xc1].concat([A,B]) },
    invokedynamic: function(A,B,C,D) { return [0xba].concat([A,B,C,D]) },
    invokeinterface: function(A,B,C,D) { return [0xb9].concat([A,B,C,D]) },
    invokespecial: function(A,B) { return [0xb7].concat([A,B]) },
    invokestatic: function(A,B) { return [0xb8].concat([A,B]) },
    invokevirtual: function(A,B) { return [0xb6].concat([A,B]) },
    ior: function() { return [0x80].concat([]) },
    irem: function() { return [0x70].concat([]) },
    ireturn: function() { return [0xac].concat([]) },
    ishl: function() { return [0x78].concat([]) },
    ishr: function() { return [0x7a].concat([]) },
    istore: function(A) { return [0x36].concat([A]) },
    istore_0: function() { return [0x3b].concat([]) },
    istore_1: function() { return [0x3c].concat([]) },
    istore_2: function() { return [0x3d].concat([]) },
    istore_3: function() { return [0x3e].concat([]) },
    isub: function() { return [0x64].concat([]) },
    iushr: function() { return [0x7c].concat([]) },
    ixor: function() { return [0x82].concat([]) },
    l2d: function() { return [0x8a].concat([]) },
    l2f: function() { return [0x89].concat([]) },
    l2i: function() { return [0x88].concat([]) },
    ladd: function() { return [0x61].concat([]) },
    laload: function() { return [0x2f].concat([]) },
    land: function() { return [0x7f].concat([]) },
    lastore: function() { return [0x50].concat([]) },
    lcmp: function() { return [0x94].concat([]) },
    lconst_0: function() { return [0x09].concat([]) },
    lconst_1: function() { return [0x0a].concat([]) },
    ldc: function(A) { return [0x12].concat([A]) },
    ldc_w: function(A,B) { return [0x13].concat([A,B]) },
    ldc2_w: function(A,B) { return [0x14].concat([A,B]) },
    ldiv: function() { return [0x6d].concat([]) },
    lload: function(A) { return [0x16].concat([A]) },
    lload_0: function() { return [0x1e].concat([]) },
    lload_1: function() { return [0x1f].concat([]) },
    lload_2: function() { return [0x20].concat([]) },
    lload_3: function() { return [0x21].concat([]) },
    lmul: function() { return [0x69].concat([]) },
    lneg: function() { return [0x75].concat([]) },
    lookupswitch: function() { return [0xab].concat(arguments) },
    lor: function() { return [0x81].concat([]) },
    lrem: function() { return [0x71].concat([]) },
    lreturn: function() { return [0xad].concat([]) },
    lshl: function() { return [0x79].concat([]) },
    lshr: function() { return [0x7b].concat([]) },
    lstore: function(A) { return [0x37].concat([A]) },
    lstore_0: function() { return [0x3f].concat([]) },
    lstore_1: function() { return [0x40].concat([]) },
    lstore_2: function() { return [0x41].concat([]) },
    lstore_3: function() { return [0x42].concat([]) },
    lsub: function() { return [0x65].concat([]) },
    lushr: function() { return [0x7d].concat([]) },
    lxor: function() { return [0x83].concat([]) },
    monitorenter: function() { return [0xc2].concat([]) },
    monitorexit: function() { return [0xc3].concat([]) },
    multianewarray: function(A,B,C) { return [0xc5].concat([A,B,C]) },
    new: function(A,B) { return [0xbb].concat([A,B]) },
    newarray: function(A) { return [0xbc].concat([A]) },
    nop: function() { return [0x00].concat([]) },
    pop: function() { return [0x57].concat([]) },
    pop2: function() { return [0x58].concat([]) },
    putfield: function(A,B) { return [0xb5].concat([A,B]) },
    putstatic: function(A,B) { return [0xb3].concat([A,B]) },
    return: function() { return [0xb1].concat([]) },
    saload: function() { return [0x35].concat([]) },
    sastore: function() { return [0x56].concat([]) },
    sipush: function(A,B) { return [0x11].concat([A,B]) },
    swap: function() { return [0x5f].concat([]) },
    tableswitch: function() { return [0xaa].concat(arguments) },
    wide: function() { return [0xc4].concat(arguments) }
}