// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// eslint-disable-next-line spaced-comment
/// <reference types="@polkadot/dev/node/test/node" />

import { TypeRegistry } from '../../create';

const ACTUAL = '0x' +
  // Vec<ValidatorIndex>
  '85033b003f003e00ac00d300e000f0001600a000a300c000f200ab00a400fd00a200b2001300f500f40062007c004b00430007004000810012002f005000c200b90018006b000600b000560097004600d100be001e00060149006e00e20060006f004a0024007d009c008300c9008800030131000c004d00f6005b00e8001b00e100d7007100e9004e0079009f00bd009600e6009100dd00d600ae0025007300e500da00bb00f300e400f800c10028002c00a90047005900cb00fc00c4004c00680089002100ce00ee006c00670041003900d8005f000501950051009e00040075002b0027000a005e009d00c8001d00610098005300dc002200d400a1000d002d008400fe00c500630008007600d5003c008b00cd005a00c70026001a005200b1002900b60014008c005c004800d9009400d0005d002e009300cc003d003200b700ff006d003700660054003a00fa00d200ca00bc001c00af0011000e00580070008700720044008600de008a009b0078008e008d00b500a5006a00ed000500ea00bf00340030001900020182004f007e00f9007b001000360009010900380092002a004200570099000a010000a800fb00eb0002006900c600ad008f0033007a000401' +
  // CompactAssignmentsTo257
  '0109cc0200000000ce0200000200d00200000400d10200000500d20200000600d30200000700d40200000800d50200000900d60200000a00d80200000c00d90200000d00da0200000e00dc0200001000dd0200001100de0200001200df0200001300e00200001400e20200001600e40200001800e50200001900e60200001a00e70200001b00e80200001c00e90200001d00ea0200001e00ed0200002100ee0200002200f00200002400f10200002500f20200002600f30200002700f40200002800f50200002900f60200002a00f70200002b00f80200002c00f90200002d00fa0200002e00fb0200002f00fc0200003000fd0200003100fe0200003200ff0200003300000300003400020300003600030300003700040300003800050300003900060300003a00070300003b00080300003c00090300003d000a0300003e000b0300003f000c03000040000d03000041000e03000042000f0300004300100300004400120300004600130300004700140300004800150300004900160300004a00170300004b00180300004c00190300004d001a0300004e001b0300004f001c03000050001d03000051001e03000052001f0300005300200300005400220300005600230300005700240300005800250300005900260300005a00270300005b00280300005c00290300005d002a0300005e002b0300005f002c03000060002d03000061002e03000062002f0300006300320300006600330300006700340300006800350300006900360300006a00370300006b00380300006c00390300006d003a0300006e003b0300006f003c03000070003d03000071003e03000072003f0300007300410300007500420300007600440300007800450300007900460300007a00470300007b00480300007c00490300007d004a0300007e004d03000081004e03000082004f0300008300500300008400520300008600530300008700540300008800550300008900560300008a00570300008b00580300008c00590300008d005a0300008e005b0300008f005d03000091005e03000092005f0300009300600300009400610300009500620300009600630300009700640300009800650300009900670300009b00680300009c00690300009d006a0300009e006b0300009f006c030000a0006d030000a1006e030000a2006f030000a30070030000a40071030000a50074030000a80075030000a90077030000ab0078030000ac0079030000ad007a030000ae007b030000af007c030000b0007d030000b1007e030000b20081030000b50082030000b60083030000b70085030000b90087030000bb0088030000bc0089030000bd008a030000be008b030000bf008c030000c0008d030000c1008e030000c20090030000c40091030000c50092030000c60093030000c70094030000c80095030000c90096030000ca0097030000cb0098030000cc0099030000cd009a030000ce009c030000d0009d030000d1009e030000d2009f030000d300a0030000d400a1030000d500a2030000d600a3030000d700a4030000d800a5030000d900a6030000da00a8030000dc00a9030000dd00aa030000de00ac030000e000ad030000e100ae030000e200b0030000e400b1030000e500b2030000e600b4030000e800b5030000e900b6030000ea00b7030000eb00b9030000ed00ba030000ee00bc030000f000be030000f200bf030000f300c0030000f400c1030000f500c2030000f600c4030000f800c5030000f900c6030000fa00c7030000fb00c8030000fc00c9030000fd00ca030000fe00cb030000ff00ce0300000201cf0300000301d00300000401d10300000501d20300000601d50300000901d60300000a0101000000e400020000005d0004000000730007000000dc00080000000a000a000000c9000c0000009d000d000000fe000e0000003e0010000000f60011000000d00012000000080013000000240014000000f400150000004a001600000005011900000012001c0000006c001d000000c8001e0000003e001f0000003b00210000009700220000005400240000009d002b00000056002c000000d0002e000000240032000000f200360000005f00370000003e003800000098003d000000f60041000000160043000000120047000000e2004800000096004b000000f0004c00000018004e0000006c004f000000240051000000140052000000400053000000ac0054000000f90055000000be00580000009d005a0000005d005b0000005c005d000000120060000000940061000000e20064000000fd0066000000240069000000bd006a000000a1006b00000054006d00000058006e0000003e0071000000dc0072000000b00074000000510075000000ae007a00000054007b000000d9007c000000be007d0000005a007e0000003e007f0000005f0080000000cd0081000000f60083000000c40084000000fd0085000000fc00880000006c008a00000024008c000000e0008e00000031008f000000ce0090000000ac009500000097009900000024009a00000037009b0000003400a20000006d00a50000006200a7000000fd00a8000000f600a90000005400aa0000001b00ab0000009700ad0000003e00ae0000009e00b00000009e00b10000008400b2000000c900b4000000bd00b60000002c00b7000000fc00c0000000c400c2000000d100c4000000ab00c5000000d000c70000009100c80000001200cb0000003100cd0000004000cf000000fd00d0000000f600d4000000b700d6000000b900d70000004e00d9000000c500dc0000001600e00000005900e30000004a00e4000000e500e70000002100e8000000be00e9000000c400ef0000009e00f00000000700f30000006d00f40000003b00f5000000c000f60000009700f7000000fc00fa000000c500fb000000f600fc0000006700000100004d0002010000f900030100001c000401000004000701000046000b0100009d000d010000d50010010000fd00110100006e00120100009e00130100001200170100000a001801000024001a010000f6001b01000056001d01000012001e0100002c001f0100001c002301000050002501000012002c010000f6002e01000006012f010000dc0031010000460034010000540035010000c0003801000058003a01000054003d010000be0040010000d00041010000440042010000960043010000240045010000e600470100003e004e010000ae004f010000c50050010000fc00510100004a0052010000390053010000760054010000c000550100004d0056010000c500570100002f0058010000780059010000d3005b01000097005f010000c500620100002400630100009d0064010000dd0065010000fd006601000026006701000016006a0100003e006b0100003e006c010000eb006f0100003e00700100006e00720100006c00750100006c007f010000b70080010000fe00820100005d00840100009e0087010000bb00890100006e008a010000cb008b0100009c008d010000e9008e0100003e008f010000be00940100002400950100003e009901000006009b0100009e009d0100009e009f0100002d00a0010000a100a40100006f00a70100000501a90100009500ac0100000501ad0100005900ae010000dc00b00100005400b30100003e00b70100006100b90100005900bb010000dc00bd010000d000be010000a200c00100009700c1010000e600c40100008c00c5010000dc00c7010000b600c90100006800cb0100003e00cd010000bd00cf010000b700d30100002400d50100003e00d80100002400d90100009c00da0100006e00dc010000f600e10100005d00e4010000e400e90100003b00ec0100006100ee010000b200ef0100009500f0010000d400f10100002600f20100001a00f30100001200f40100009400f60100009d00f70100009e00fc010000d000fe0100006e00010200006200020200002400050200006b0007020000d50008020000940010020000dd00110200009600120200001d00160200003e0019020000e2001a02000014001d02000012001f0200009e0020020000e20021020000e000230200006b002502000083002902000095002d02000012002e020000a1002f020000b70034020000970038020000c7003902000024003a020000f6003c020000f6003d020000b7003e020000b7003f020000840041020000c500420200001200430200000800450200005e00460200009e0047020000ed004b020000b2004c020000a2004f0200000a0050020000240055020000c50057020000540058020000240059020000c5005a02000005015b0200003c005e020000d8005f0200001400600200005f0061020000540062020000d900650200003e0066020000400067020000c7006902000098006e02000037006f020000bc00720200003e00740200004000750200009e0077020000120079020000da007b0200005f007c020000bd007d0200009c007e020000fd0081020000240082020000130084020000fc0087020000830088020000a100890200000501900200005900920200004000970200000800990200009e009b020000f6009c02000094009e02000024009f0200005900a20200000400a30200003b00a60200006c00a70200009d00a90200005000ab0200006e00af0200005400b30200002400b4020000f300b50200001200b60200008300b90200009700ba020000e800bb0200006c00c00200002400c10200006c00c50200001200c8020000e600c90200001100ca0200001600' +
  // votes2 ...
  'ac390000006100b4a946003b000000cc009a950a0050000000480092783a0057000000ae00c68e510065000000ea00abfff9006f0000008b0026ac5e00730000009c008e5a260077000000c100a87f52007800000003015e5b070082000000600073d62c008700000075005299a000940000004700849bf2009f000000ed003a61de00bb000000620041ec9100d50000006800232ed500f9000000a50068bd3a00ff000000d60019adc500050100005e00d3d92f000c01000096001e329e000f010000ce0025811e002b0100006f007b703b00320100009d002d6bc0004a010000cb00a9a5c0005d0100000201c95ebc0069010000490054d39b0083010000bf0078f74d00970100004700001ca400a30100001100cb5b9400a50100009300a6c7fa00a6010000300076e33200c2010000c0008b863900d10100005f00efc6dd00e6010000b200f796ee00ed010000f6008b956e00fa0100002200f3d35e000d0200002c00b5712600150200004d001175d00030020000a100fa876d005d020000a000814b6b00640200008b00bd7ce5008502000076005d702c008f020000c900d1d32f00a5020000840049819100' +
  // votes 3
  '3c3a000000b90062690301b9713b004d000000d100d4437d00ef9ad800ca000000fd003ebd4c006c100a00ea00000021009a58de00e3773a00ed0000008c0098bdc200861fc1000a0100005800b2197b00fb721900290100005b00a19ee900c13cdd009001000098005a4c28006d5e670091010000d300b642da002664d800b40100009400ec48b0001c2e1a00cc0100008700492fd4002d3d3700960200003200d5bef600412e4000be0200003c00066689005968d100c6020000f90058a36a00f20cbc00cb02000076006ec96e00472aa30034ac0000000000152502005ed6050034000900ec000000fc0081398300b14adc001a55a2001c0100006a001e4d7e00b33c4f006e3d82007701000031006a48be009d308c00bf3d040081010000ff009151af00925129009151b200a101000087007583760005135d00f6028e00a8010000fe000d209f00295c1800314c2700b801000062006725e4004c73c000c80c4d00d00100000d003e47bb003b444c00be4af2004e0200006e0077651200b9588300ff0cf8005c0200002200ec25f0006e4b4300e652c4008b020000e200832b6300869a5100c408b20093020000c500e1506200fc0f47004e5eb0001803000000c200ff32410040334e003c3353004033b100060000001d00463b43008b1e060155481300bd493b00140100001c002127d400dd4958009f1ab700cd2bfa003b010000b000812e1e008722710040480800962f95008c0100001100b5240201f31634007d3bb50002490500e0010000b6001d102b0096367c007b3ed700514c210018da0000009b00ea397300655744005b2e78005c2654003f0d5c00f80000006200ed26e000b5176b009e14e800a54ae600334f6000300100002500c42fa900c22fac00592c7900c02f88005e2f490048010000f300640cee00cb3b4a000c304b00bf36e1007e3ad3007c010000a300192e5600b42e8100b82e1b00cc2ef5004c2e490006020000dd0097200700a340ab00c46e1600d60c4600eb0af40004fe000000fd00d207f3001f383e00da242400f51dbd00a82b6c00dc36970004910200009500a40cb600ed302700a711d9001e4050000d48f000ba1f9800cd07be000000085900000066005b172f00f01d0e005b172d00dc0f70005a1772005a1786005a178a005a173d005a17ca0059172e003e010000c800020e0c003d223f00302306001d116800931e9600511a1400cc18a1006e0ac700231d05014b02f80000000000001beab9a3ce0000000000000000000000c9d6650d1fd62e310000000000000000c54b85db547a2f52a47bb9a03a091300d4020000';

describe('CompactAssignmentSiCompact', (): void => {
  // generate_solution_type!(#[compact] pub struct InnerTestSolutionCompact::<_, _, _>(..));
  // let compact = InnerTestSolution {
  //    votes1: vec![(2, 20), (4, 40)],
  //    votes2: vec![
  //      (1, (10, PerU16:: from_percent(80)), 11),
  //      (5, (50, PerU16:: from_percent(85)), 51),
  //    ],
  //    ..Default::default ()
  //  };
  it('can be decoded correctly', (): void => {
    const bytes = new Uint8Array([
      8,
      2,
      0,
      0,
      0,
      20,
      0,
      4,
      0,
      0,
      0,
      40,
      0,
      8,
      1,
      0,
      0,
      0,
      10,
      0,
      204,
      204,
      11,
      0,
      5,
      0,
      0,
      0,
      50,
      0,
      152,
      217,
      51,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]);

    const registry = new TypeRegistry();
    const compact = registry.createType('CompactAssignmentsTo257', bytes);

    expect(compact.toJSON()).toEqual({
      votes1: [[2, [], 20], [4, [], 40]], // TODO: ideally we should not need these empty arrays here.
      votes10: [],
      votes11: [],
      votes12: [],
      votes13: [],
      votes14: [],
      votes15: [],
      votes16: [],
      votes2: [[1, [[10, 52428]], 11], [5, [[50, 55704]], 51]], // TODO: also the middle element here should not be 2d array.
      votes3: [],
      votes4: [],
      votes5: [],
      votes6: [],
      votes7: [],
      votes8: [],
      votes9: []
    });
  });
});

describe('CompactAssignmentSiNormal', (): void => {
  // generate_solution_type!(pub struct InnerTestSolutionCompact::<_, _, _>(..));
  // let compact = InnerTestSolution {
  //    votes1: vec![(2, 20), (4, 40)],
  //    votes2: vec![
  //      (1, (10, PerU16:: from_percent(80)), 11),
  //      (5, (50, PerU16:: from_percent(85)), 51),
  //    ],
  //    ..Default::default ()
  //  };
  it('can be decoded correctly', (): void => {
    const bytes = new Uint8Array([
      8,
      8,
      80,
      16,
      160,
      8,
      4,
      40,
      50,
      51,
      3,
      0,
      44,
      20,
      200,
      98,
      102,
      3,
      0,
      204,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]);

    const registry = new TypeRegistry();
    const compact = registry.createType('CompactAssignmentsWith16', bytes);

    expect(compact.toJSON()).toEqual({
      votes1: [[2, 20], [4, 40]],
      votes10: [],
      votes11: [],
      votes12: [],
      votes13: [],
      votes14: [],
      votes15: [],
      votes16: [],
      votes2: [[1, [10, 52428], 11], [5, [50, 55704], 51]],
      votes3: [],
      votes4: [],
      votes5: [],
      votes6: [],
      votes7: [],
      votes8: [],
      votes9: []
    });
  });
});

describe('CompactAssignments', (): void => {
  const registry = new TypeRegistry();
  const votes2 = [[1, [[2, 12345]], 3]];
  const test = registry.createType('CompactAssignmentsTo257', {
    votes1: [[1, [], 3]],
    votes2
  });

  it('has a valid vote1 ([Type; <number>] equivalency)', (): void => {
    expect(test.votes1.toHex()).toEqual(
      registry.createType('Vec<(u32, u16)>', [
        [1, 3]
      ]).toHex()
    );
  });

  it('hash valid vote2 (actual tuple values)', (): void => {
    expect(test.votes2.toHex()).toEqual(
      registry.createType('Vec<(u32, [(u16, u16); 1], u16)>', votes2).toHex()
    );
  });

  it('has a proper decoded toHuman() available', (): void => {
    expect(test.votes2.toHuman()).toEqual([['1', [['2', '12,345']], '3']]);
  });

  it('decodes an actual solution from the chain', (): void => {
    expect(
      registry.createType('(Vec<ValidatorIndex>, CompactAssignmentsTo257, PhragmenScore, EraIndex)', ACTUAL).toHex()
    ).toEqual(ACTUAL);
  });
});
