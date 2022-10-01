import { Enzyme } from "./elements";

/**
 * NEB Restriction Enzymes
 *
 * a list of enzyme objects with their name as the key,
 * their recognition site sequence as "rseq", and cut site relative to the
 * start of the recognition site as "fcut", and the start of the resulting overhang
 * from the recognition site as "rcut"
 *
 * eg: PstI with recognition site "CTGCAG" cuts so that the break is at (cutSite = 5):
 *
 * ```
 * 		..C TGCA|G..
 * 		..G|ACGT C..
 *
 * ```
 *
 * and the resulting fragment looks like (rcut = 1):
 *
 * ```
 * 		..CTGCA
 * 		..G****
 * ```
 */
const enzymes: { [key: string]: Enzyme } = {
  aatii: {
    fcut: 5,
    name: "AatII",
    rcut: 1,
    rseq: "GACGTC",
  },
  abasi: {
    fcut: 14,
    name: "AbaSI",
    rcut: 12,
    rseq: "hmCNNNNNNNNNNN",
  },
  acc65i: {
    fcut: 1,
    name: "Acc65I",
    rcut: 5,
    rseq: "GGTACC",
  },
  acci: {
    fcut: 2,
    name: "AccI",
    rcut: 4,
    rseq: "GTMKAC",
  },
  acii: {
    fcut: 1,
    name: "AciI",
    rcut: 3,
    rseq: "CCGC",
  },
  acli: {
    fcut: 2,
    name: "AclI",
    rcut: 4,
    rseq: "AACGTT",
  },
  acui: {
    fcut: 22,
    name: "AcuI",
    rcut: 20,
    rseq: "CTGAAGNNNNNNNNNNNNNNNN",
  },
  afei: {
    fcut: 3,
    name: "AfeI",
    rcut: 3,
    rseq: "AGCGCT",
  },
  aflii: {
    fcut: 1,
    name: "AflII",
    rcut: 5,
    rseq: "CTTAAG",
  },
  afliii: {
    fcut: 1,
    name: "AflIII",
    rcut: 5,
    rseq: "ACRYGT",
  },
  agei: {
    fcut: 1,
    name: "AgeI",
    rcut: 5,
    rseq: "ACCGGT",
  },
  ahdi: {
    fcut: 6,
    name: "AhdI",
    rcut: 5,
    rseq: "GACNNNNNGTC",
  },
  alei: {
    fcut: 5,
    name: "AleI",
    rcut: 5,
    rseq: "CACNNNNGTG",
  },
  alui: {
    fcut: 2,
    name: "AluI",
    rcut: 2,
    rseq: "AGCT",
  },
  alwi: {
    fcut: 9,
    name: "AlwI",
    rcut: 10,
    rseq: "GGATCNNNNN",
  },
  alwni: {
    fcut: 6,
    name: "AlwNI",
    rcut: 3,
    rseq: "CAGNNNCTG",
  },
  apai: {
    fcut: 5,
    name: "ApaI",
    rcut: 1,
    rseq: "GGGCCC",
  },
  apali: {
    fcut: 1,
    name: "ApaLI",
    rcut: 5,
    rseq: "GTGCAC",
  },
  apeki: {
    fcut: 1,
    name: "ApeKI",
    rcut: 4,
    rseq: "GCWGC",
  },
  apoi: {
    fcut: 1,
    name: "ApoI",
    rcut: 5,
    rseq: "RAATTY",
  },
  asci: {
    fcut: 2,
    name: "AscI",
    rcut: 6,
    rseq: "GGCGCGCC",
  },
  asei: {
    fcut: 2,
    name: "AseI",
    rcut: 4,
    rseq: "ATTAAT",
  },
  asisi: {
    fcut: 5,
    name: "AsiSI",
    rcut: 3,
    rseq: "GCGATCGC",
  },
  avai: {
    fcut: 1,
    name: "AvaI",
    rcut: 5,
    rseq: "CYCGRG",
  },
  avaii: {
    fcut: 1,
    name: "AvaII",
    rcut: 4,
    rseq: "GGWCC",
  },
  avrii: {
    fcut: 1,
    name: "AvrII",
    rcut: 5,
    rseq: "CCTAGG",
  },
  baegi: {
    fcut: 5,
    name: "BaeGI",
    rcut: 1,
    rseq: "GKGCMC",
  },
  baei: {
    fcut: 38,
    name: "BaeI",
    rcut: 33,
    rseq: "NNNNNNNNNNNNNNNACNNNNGTAYCNNNNNNNNNNNN",
  },
  bamhi: {
    fcut: 1,
    name: "BamHI",
    rcut: 5,
    rseq: "GGATCC",
  },
  bani: {
    fcut: 1,
    name: "BanI",
    rcut: 5,
    rseq: "GGYRCC",
  },
  banii: {
    fcut: 5,
    name: "BanII",
    rcut: 1,
    rseq: "GRGCYC",
  },
  bbsi: {
    fcut: 8,
    name: "BbsI",
    rcut: 12,
    rseq: "GAAGACNNNNNN",
  },
  bbvci: {
    fcut: 2,
    name: "BbvCI",
    rcut: 5,
    rseq: "CCTCAGC",
  },
  bbvi: {
    fcut: 13,
    name: "BbvI",
    rcut: 17,
    rseq: "GCAGCNNNNNNNNNNNN",
  },
  bcci: {
    fcut: 9,
    name: "BccI",
    rcut: 10,
    rseq: "CCATCNNNNN",
  },
  bceai: {
    fcut: 17,
    name: "BceAI",
    rcut: 19,
    rseq: "ACGGCNNNNNNNNNNNNNN",
  },
  bcgi: {
    fcut: 36,
    name: "BcgI",
    rcut: 34,
    rseq: "NNNNNNNNNNNNCGANNNNNNTGCNNNNNNNNNNNN",
  },
  bcivi: {
    fcut: 12,
    name: "BciVI",
    rcut: 11,
    rseq: "GTATCCNNNNNN",
  },
  bcli: {
    fcut: 1,
    name: "BclI",
    rcut: 5,
    rseq: "TGATCA",
  },
  bcodi: {
    fcut: 6,
    name: "BcoDI",
    rcut: 10,
    rseq: "GTCTCNNNNN",
  },
  bfai: {
    fcut: 1,
    name: "BfaI",
    rcut: 3,
    rseq: "CTAG",
  },
  bfuai: {
    fcut: 10,
    name: "BfuAI",
    rcut: 14,
    rseq: "ACCTGCNNNNNNNN",
  },
  bgli: {
    fcut: 7,
    name: "BglI",
    rcut: 4,
    rseq: "GCCNNNNNGGC",
  },
  bglii: {
    fcut: 1,
    name: "BglII",
    rcut: 5,
    rseq: "AGATCT",
  },
  blpi: {
    fcut: 2,
    name: "BlpI",
    rcut: 5,
    rseq: "GCTNAGC",
  },
  bmgbi: {
    fcut: 3,
    name: "BmgBI",
    rcut: 3,
    rseq: "CACGTC",
  },
  bmri: {
    fcut: 11,
    name: "BmrI",
    rcut: 10,
    rseq: "ACTGGGNNNNN",
  },
  bmti: {
    fcut: 5,
    name: "BmtI",
    rcut: 1,
    rseq: "GCTAGC",
  },
  bpmi: {
    fcut: 22,
    name: "BpmI",
    rcut: 20,
    rseq: "CTGGAGNNNNNNNNNNNNNNNN",
  },
  bpu10i: {
    fcut: 2,
    name: "Bpu10I",
    rcut: 5,
    rseq: "CCTNAGC",
  },
  bpuei: {
    fcut: 22,
    name: "BpuEI",
    rcut: 20,
    rseq: "CTTGAGNNNNNNNNNNNNNNNN",
  },
  bsaai: {
    fcut: 3,
    name: "BsaAI",
    rcut: 3,
    rseq: "YACGTR",
  },
  bsabi: {
    fcut: 5,
    name: "BsaBI",
    rcut: 5,
    rseq: "GATNNNNATC",
  },
  bsahi: {
    fcut: 2,
    name: "BsaHI",
    rcut: 4,
    rseq: "GRCGYC",
  },
  bsai: {
    fcut: 7,
    name: "BsaI",
    rcut: 11,
    rseq: "GGTCTCNNNNN",
  },
  bsaji: {
    fcut: 1,
    name: "BsaJI",
    rcut: 5,
    rseq: "CCNNGG",
  },
  bsawi: {
    fcut: 1,
    name: "BsaWI",
    rcut: 5,
    rseq: "WCCGGW",
  },
  bsaxi: {
    fcut: 33,
    name: "BsaXI",
    rcut: 30,
    rseq: "NNNNNNNNNNNNACNNNNNCTCCNNNNNNNNNN",
  },
  bseri: {
    fcut: 16,
    name: "BseRI",
    rcut: 14,
    rseq: "GAGGAGNNNNNNNNNN",
  },
  bseyi: {
    fcut: 1,
    name: "BseYI",
    rcut: 5,
    rseq: "CCCAGC",
  },
  bsgi: {
    fcut: 22,
    name: "BsgI",
    rcut: 20,
    rseq: "GTGCAGNNNNNNNNNNNNNNNN",
  },
  bsiei: {
    fcut: 4,
    name: "BsiEI",
    rcut: 2,
    rseq: "CGRYCG",
  },
  bsihkai: {
    fcut: 5,
    name: "BsiHKAI",
    rcut: 1,
    rseq: "GWGCWC",
  },
  bsiwi: {
    fcut: 1,
    name: "BsiWI",
    rcut: 5,
    rseq: "CGTACG",
  },
  bsli: {
    fcut: 7,
    name: "BslI",
    rcut: 4,
    rseq: "CCNNNNNNNGG",
  },
  bsmai: {
    fcut: 6,
    name: "BsmAI",
    rcut: 10,
    rseq: "GTCTCNNNNN",
  },
  bsmbi: {
    fcut: 7,
    name: "BsmBI",
    rcut: 11,
    rseq: "CGTCTCNNNNN",
  },
  bsmfi: {
    fcut: 15,
    name: "BsmFI",
    rcut: 19,
    rseq: "GGGACNNNNNNNNNNNNNN",
  },
  bsmi: {
    fcut: 7,
    name: "BsmI",
    rcut: 5,
    rseq: "GAATGCN",
  },
  bsobi: {
    fcut: 1,
    name: "BsoBI",
    rcut: 5,
    rseq: "CYCGRG",
  },
  bsp1286i: {
    fcut: 5,
    name: "Bsp1286I",
    rcut: 1,
    rseq: "GDGCHC",
  },
  bspcni: {
    fcut: 14,
    name: "BspCNI",
    rcut: 12,
    rseq: "CTCAGNNNNNNNNN",
  },
  bspdi: {
    fcut: 2,
    name: "BspDI",
    rcut: 4,
    rseq: "ATCGAT",
  },
  bspei: {
    fcut: 1,
    name: "BspEI",
    rcut: 5,
    rseq: "TCCGGA",
  },
  bsphi: {
    fcut: 1,
    name: "BspHI",
    rcut: 5,
    rseq: "TCATGA",
  },
  bspmi: {
    fcut: 10,
    name: "BspMI",
    rcut: 14,
    rseq: "ACCTGCNNNNNNNN",
  },
  bspqi: {
    fcut: 8,
    name: "BspQI",
    rcut: 11,
    rseq: "GCTCTTCNNNN",
  },
  bsrbi: {
    fcut: 3,
    name: "BsrBI",
    rcut: 3,
    rseq: "CCGCTC",
  },
  bsrdi: {
    fcut: 8,
    name: "BsrDI",
    rcut: 6,
    rseq: "GCAATGNN",
  },
  bsrfi: {
    fcut: 1,
    name: "BsrFI",
    rcut: 5,
    rseq: "RCCGGY",
  },
  bsrgi: {
    fcut: 1,
    name: "BsrGI",
    rcut: 5,
    rseq: "TGTACA",
  },
  bsri: {
    fcut: 6,
    name: "BsrI",
    rcut: 4,
    rseq: "ACTGGN",
  },
  bsshii: {
    fcut: 1,
    name: "BssHII",
    rcut: 5,
    rseq: "GCGCGC",
  },
  bsssi: {
    fcut: 1,
    name: "BssSI",
    rcut: 5,
    rseq: "CACGAG",
  },
  bstapi: {
    fcut: 7,
    name: "BstAPI",
    rcut: 4,
    rseq: "GCANNNNNTGC",
  },
  bstbi: {
    fcut: 2,
    name: "BstBI",
    rcut: 4,
    rseq: "TTCGAA",
  },
  bsteii: {
    fcut: 1,
    name: "BstEII",
    rcut: 6,
    rseq: "GGTNACC",
  },
  bstni: {
    fcut: 2,
    name: "BstNI",
    rcut: 3,
    rseq: "CCWGG",
  },
  bstui: {
    fcut: 2,
    name: "BstUI",
    rcut: 2,
    rseq: "CGCG",
  },
  bstxi: {
    fcut: 8,
    name: "BstXI",
    rcut: 4,
    rseq: "CCANNNNNNTGG",
  },
  bstyi: {
    fcut: 1,
    name: "BstYI",
    rcut: 5,
    rseq: "RGATCY",
  },
  bstz17i: {
    fcut: 3,
    name: "BstZ17I",
    rcut: 3,
    rseq: "GTATAC",
  },
  bsu36i: {
    fcut: 2,
    name: "Bsu36I",
    rcut: 5,
    rseq: "CCTNAGG",
  },
  btgi: {
    fcut: 1,
    name: "BtgI",
    rcut: 5,
    rseq: "CCRYGG",
  },
  btgzi: {
    fcut: 16,
    name: "BtgZI",
    rcut: 20,
    rseq: "GCGATGNNNNNNNNNNNNNN",
  },
  btsci: {
    fcut: 7,
    name: "BtsCI",
    rcut: 5,
    rseq: "GGATGNN",
  },
  btsi: {
    fcut: 8,
    name: "BtsI",
    rcut: 6,
    rseq: "GCAGTGNN",
  },
  btsimuti: {
    fcut: 7,
    name: "BtsIMutI",
    rcut: 5,
    rseq: "CAGTGNN",
  },
  cac8i: {
    fcut: 3,
    name: "Cac8I",
    rcut: 3,
    rseq: "GCNNGC",
  },
  clai: {
    fcut: 2,
    name: "ClaI",
    rcut: 4,
    rseq: "ATCGAT",
  },
  cspci: {
    fcut: 37,
    name: "CspCI",
    rcut: 35,
    rseq: "NNNNNNNNNNNNNCAANNNNNGTGGNNNNNNNNNNNN",
  },
  cviaii: {
    fcut: 1,
    name: "CviAII",
    rcut: 3,
    rseq: "CATG",
  },
  "cviki-1": {
    fcut: 2,
    name: "CviKI-1",
    rcut: 2,
    rseq: "RGCY",
  },
  cviqi: {
    fcut: 1,
    name: "CviQI",
    rcut: 3,
    rseq: "GTAC",
  },
  ddei: {
    fcut: 1,
    name: "DdeI",
    rcut: 4,
    rseq: "CTNAG",
  },
  dpni: {
    fcut: 3,
    name: "DpnI",
    rcut: 3,
    rseq: "GmATC",
  },
  dpnii: {
    fcut: 0,
    name: "DpnII",
    rcut: 4,
    rseq: "GATC",
  },
  drai: {
    fcut: 3,
    name: "DraI",
    rcut: 3,
    rseq: "TTTAAA",
  },
  draiii: {
    fcut: 6,
    name: "DraIII",
    rcut: 3,
    rseq: "CACNNNGTG",
  },
  drdi: {
    fcut: 7,
    name: "DrdI",
    rcut: 5,
    rseq: "GACNNNNNNGTC",
  },
  eaei: {
    fcut: 1,
    name: "EaeI",
    rcut: 5,
    rseq: "YGGCCR",
  },
  eagi: {
    fcut: 1,
    name: "EagI",
    rcut: 5,
    rseq: "CGGCCG",
  },
  eari: {
    fcut: 7,
    name: "EarI",
    rcut: 10,
    rseq: "CTCTTCNNNN",
  },
  ecii: {
    fcut: 17,
    name: "EciI",
    rcut: 15,
    rseq: "GGCGGANNNNNNNNNNN",
  },
  eco53ki: {
    fcut: 3,
    name: "Eco53kI",
    rcut: 3,
    rseq: "GAGCTC",
  },
  econi: {
    fcut: 5,
    name: "EcoNI",
    rcut: 6,
    rseq: "CCTNNNNNAGG",
  },
  ecoo109i: {
    fcut: 2,
    name: "EcoO109I",
    rcut: 5,
    rseq: "RGGNCCY",
  },
  ecori: {
    fcut: 1,
    name: "EcoRI",
    rcut: 5,
    rseq: "GAATTC",
  },
  ecorv: {
    fcut: 3,
    name: "EcoRV",
    rcut: 3,
    rseq: "GATATC",
  },
  esp3i: {
    fcut: 7,
    name: "Esp3I",
    rcut: 11,
    rseq: "CGTCTCNNNNN",
  },
  fati: {
    fcut: 0,
    name: "FatI",
    rcut: 4,
    rseq: "CATG",
  },
  faui: {
    fcut: 9,
    name: "FauI",
    rcut: 11,
    rseq: "CCCGCNNNNNN",
  },
  fnu4hi: {
    fcut: 2,
    name: "Fnu4HI",
    rcut: 3,
    rseq: "GCNGC",
  },
  foki: {
    fcut: 14,
    name: "FokI",
    rcut: 18,
    rseq: "GGATGNNNNNNNNNNNNN",
  },
  fsei: {
    fcut: 6,
    name: "FseI",
    rcut: 2,
    rseq: "GGCCGGCC",
  },
  fspei: {
    fcut: 15,
    name: "FspEI",
    rcut: 19,
    rseq: "CmCNNNNNNNNNNNNNNNN",
  },
  fspi: {
    fcut: 3,
    name: "FspI",
    rcut: 3,
    rseq: "TGCGCA",
  },
  haeii: {
    fcut: 5,
    name: "HaeII",
    rcut: 1,
    rseq: "RGCGCY",
  },
  haeiii: {
    fcut: 2,
    name: "HaeIII",
    rcut: 2,
    rseq: "GGCC",
  },
  hgai: {
    fcut: 10,
    name: "HgaI",
    rcut: 15,
    rseq: "GACGCNNNNNNNNNN",
  },
  hhai: {
    fcut: 3,
    name: "HhaI",
    rcut: 1,
    rseq: "GCGC",
  },
  hincii: {
    fcut: 3,
    name: "HincII",
    rcut: 3,
    rseq: "GTYRAC",
  },
  hindiii: {
    fcut: 1,
    name: "HindIII",
    rcut: 5,
    rseq: "AAGCTT",
  },
  hinfi: {
    fcut: 1,
    name: "HinfI",
    rcut: 4,
    rseq: "GANTC",
  },
  hinp1i: {
    fcut: 1,
    name: "HinP1I",
    rcut: 3,
    rseq: "GCGC",
  },
  hpai: {
    fcut: 3,
    name: "HpaI",
    rcut: 3,
    rseq: "GTTAAC",
  },
  hpaii: {
    fcut: 1,
    name: "HpaII",
    rcut: 3,
    rseq: "CCGG",
  },
  hphi: {
    fcut: 13,
    name: "HphI",
    rcut: 12,
    rseq: "GGTGANNNNNNNN",
  },
  hpy166ii: {
    fcut: 3,
    name: "Hpy166II",
    rcut: 3,
    rseq: "GTNNAC",
  },
  hpy188i: {
    fcut: 3,
    name: "Hpy188I",
    rcut: 2,
    rseq: "TCNGA",
  },
  hpy188iii: {
    fcut: 2,
    name: "Hpy188III",
    rcut: 4,
    rseq: "TCNNGA",
  },
  hpy99i: {
    fcut: 5,
    name: "Hpy99I",
    rcut: 0,
    rseq: "CGWCG",
  },
  hpyav: {
    fcut: 11,
    name: "HpyAV",
    rcut: 10,
    rseq: "CCTTCNNNNNN",
  },
  hpych4iii: {
    fcut: 3,
    name: "HpyCH4III",
    rcut: 2,
    rseq: "ACNGT",
  },
  hpych4iv: {
    fcut: 1,
    name: "HpyCH4IV",
    rcut: 3,
    rseq: "ACGT",
  },
  hpych4v: {
    fcut: 2,
    name: "HpyCH4V",
    rcut: 2,
    rseq: "TGCA",
  },
  "i-ceui": {
    fcut: 18,
    name: "I-CeuI",
    rcut: 14,
    rseq: "TAACTATAACGGTCCTAAGGTAGCGAA",
  },
  "i-scei": {
    fcut: 9,
    name: "I-SceI",
    rcut: 5,
    rseq: "TAGGGATAACAGGGTAAT",
  },
  kasi: {
    fcut: 1,
    name: "KasI",
    rcut: 5,
    rseq: "GGCGCC",
  },
  kpni: {
    fcut: 5,
    name: "KpnI",
    rcut: 1,
    rseq: "GGTACC",
  },
  lpnpi: {
    fcut: 15,
    name: "LpnPI",
    rcut: 19,
    rseq: "CmCDGNNNNNNNNNNNNNN",
  },
  mboi: {
    fcut: 0,
    name: "MboI",
    rcut: 4,
    rseq: "GATC",
  },
  mboii: {
    fcut: 13,
    name: "MboII",
    rcut: 12,
    rseq: "GAAGANNNNNNNN",
  },
  mfei: {
    fcut: 1,
    name: "MfeI",
    rcut: 5,
    rseq: "CAATTG",
  },
  mluci: {
    fcut: 0,
    name: "MluCI",
    rcut: 4,
    rseq: "AATT",
  },
  mlui: {
    fcut: 1,
    name: "MluI",
    rcut: 5,
    rseq: "ACGCGT",
  },
  mlyi: {
    fcut: 10,
    name: "MlyI",
    rcut: 10,
    rseq: "GAGTCNNNNN",
  },
  mmei: {
    fcut: 26,
    name: "MmeI",
    rcut: 24,
    rseq: "TCCRACNNNNNNNNNNNNNNNNNNNN",
  },
  mnli: {
    fcut: 11,
    name: "MnlI",
    rcut: 10,
    rseq: "CCTCNNNNNNN",
  },
  msci: {
    fcut: 3,
    name: "MscI",
    rcut: 3,
    rseq: "TGGCCA",
  },
  msei: {
    fcut: 1,
    name: "MseI",
    rcut: 3,
    rseq: "TTAA",
  },
  msli: {
    fcut: 5,
    name: "MslI",
    rcut: 5,
    rseq: "CAYNNNNRTG",
  },
  mspa1i: {
    fcut: 3,
    name: "MspA1I",
    rcut: 3,
    rseq: "CMGCKG",
  },
  mspi: {
    fcut: 1,
    name: "MspI",
    rcut: 3,
    rseq: "CCGG",
  },
  mspji: {
    fcut: 14,
    name: "MspJI",
    rcut: 18,
    rseq: "mCNNRNNNNNNNNNNNNN",
  },
  mwoi: {
    fcut: 7,
    name: "MwoI",
    rcut: 4,
    rseq: "GCNNNNNNNGC",
  },
  naei: {
    fcut: 3,
    name: "NaeI",
    rcut: 3,
    rseq: "GCCGGC",
  },
  nari: {
    fcut: 2,
    name: "NarI",
    rcut: 4,
    rseq: "GGCGCC",
  },
  ncii: {
    fcut: 2,
    name: "NciI",
    rcut: 3,
    rseq: "CCSGG",
  },
  ncoi: {
    fcut: 1,
    name: "NcoI",
    rcut: 5,
    rseq: "CCATGG",
  },
  ndei: {
    fcut: 2,
    name: "NdeI",
    rcut: 4,
    rseq: "CATATG",
  },
  ngomiv: {
    fcut: 1,
    name: "NgoMIV",
    rcut: 5,
    rseq: "GCCGGC",
  },
  nhei: {
    fcut: 1,
    name: "NheI",
    rcut: 5,
    rseq: "GCTAGC",
  },
  nlaiii: {
    fcut: 4,
    name: "NlaIII",
    rcut: 0,
    rseq: "CATG",
  },
  nlaiv: {
    fcut: 3,
    name: "NlaIV",
    rcut: 3,
    rseq: "GGNNCC",
  },
  nmeaiii: {
    fcut: 26,
    name: "NmeAIII",
    rcut: 25,
    rseq: "GCCGAGNNNNNNNNNNNNNNNNNNNN",
  },
  noti: {
    fcut: 2,
    name: "NotI",
    rcut: 6,
    rseq: "GCGGCCGC",
  },
  nrui: {
    fcut: 3,
    name: "NruI",
    rcut: 3,
    rseq: "TCGCGA",
  },
  nsii: {
    fcut: 5,
    name: "NsiI",
    rcut: 1,
    rseq: "ATGCAT",
  },
  nspi: {
    fcut: 5,
    name: "NspI",
    rcut: 1,
    rseq: "RCATGY",
  },
  paci: {
    fcut: 5,
    name: "PacI",
    rcut: 3,
    rseq: "TTAATTAA",
  },
  paer7i: {
    fcut: 1,
    name: "PaeR7I",
    rcut: 5,
    rseq: "CTCGAG",
  },
  pcii: {
    fcut: 1,
    name: "PciI",
    rcut: 5,
    rseq: "ACATGT",
  },
  pflfi: {
    fcut: 4,
    name: "PflFI",
    rcut: 5,
    rseq: "GACNNNGTC",
  },
  pflmi: {
    fcut: 7,
    name: "PflMI",
    rcut: 4,
    rseq: "CCANNNNNTGG",
  },
  "pi-pspi": {
    fcut: 17,
    name: "PI-PspI",
    rcut: 13,
    rseq: "TGGCAAACAGCTATTATGGGTATTATGGGT",
  },
  "pi-scei": {
    fcut: 15,
    name: "PI-SceI",
    rcut: 11,
    rseq: "ATCTATGTCGGGTGCGGAGAAAGAGGTAATGAAATGG",
  },
  plei: {
    fcut: 9,
    name: "PleI",
    rcut: 10,
    rseq: "GAGTCNNNNN",
  },
  pluti: {
    fcut: 5,
    name: "PluTI",
    rcut: 1,
    rseq: "GGCGCC",
  },
  pmei: {
    fcut: 4,
    name: "PmeI",
    rcut: 4,
    rseq: "GTTTAAAC",
  },
  pmli: {
    fcut: 3,
    name: "PmlI",
    rcut: 3,
    rseq: "CACGTG",
  },
  ppumi: {
    fcut: 2,
    name: "PpuMI",
    rcut: 5,
    rseq: "RGGWCCY",
  },
  pshai: {
    fcut: 5,
    name: "PshAI",
    rcut: 5,
    rseq: "GACNNNNGTC",
  },
  psii: {
    fcut: 3,
    name: "PsiI",
    rcut: 3,
    rseq: "TTATAA",
  },
  pspgi: {
    fcut: 0,
    name: "PspGI",
    rcut: 5,
    rseq: "CCWGG",
  },
  pspomi: {
    fcut: 1,
    name: "PspOMI",
    rcut: 5,
    rseq: "GGGCCC",
  },
  pspxi: {
    fcut: 2,
    name: "PspXI",
    rcut: 6,
    rseq: "VCTCGAGB",
  },
  psti: {
    fcut: 5,
    name: "PstI",
    rcut: 1,
    rseq: "CTGCAG",
  },
  pvui: {
    fcut: 4,
    name: "PvuI",
    rcut: 2,
    rseq: "CGATCG",
  },
  pvuii: {
    fcut: 3,
    name: "PvuII",
    rcut: 3,
    rseq: "CAGCTG",
  },
  rsai: {
    fcut: 2,
    name: "RsaI",
    rcut: 2,
    rseq: "GTAC",
  },
  rsrii: {
    fcut: 2,
    name: "RsrII",
    rcut: 5,
    rseq: "CGGWCCG",
  },
  saci: {
    fcut: 5,
    name: "SacI",
    rcut: 1,
    rseq: "GAGCTC",
  },
  sacii: {
    fcut: 4,
    name: "SacII",
    rcut: 2,
    rseq: "CCGCGG",
  },
  sali: {
    fcut: 1,
    name: "SalI",
    rcut: 5,
    rseq: "GTCGAC",
  },
  sapi: {
    fcut: 8,
    name: "SapI",
    rcut: 11,
    rseq: "GCTCTTCNNNN",
  },
  sau3ai: {
    fcut: 0,
    name: "Sau3AI",
    rcut: 4,
    rseq: "GATC",
  },
  sau96i: {
    fcut: 1,
    name: "Sau96I",
    rcut: 4,
    rseq: "GGNCC",
  },
  sbfi: {
    fcut: 6,
    name: "SbfI",
    rcut: 2,
    rseq: "CCTGCAGG",
  },
  scai: {
    fcut: 3,
    name: "ScaI",
    rcut: 3,
    rseq: "AGTACT",
  },
  scrfi: {
    fcut: 2,
    name: "ScrFI",
    rcut: 3,
    rseq: "CCNGG",
  },
  sexai: {
    fcut: 1,
    name: "SexAI",
    rcut: 6,
    rseq: "ACCWGGT",
  },
  sfani: {
    fcut: 10,
    name: "SfaNI",
    rcut: 14,
    rseq: "GCATCNNNNNNNNN",
  },
  sfci: {
    fcut: 1,
    name: "SfcI",
    rcut: 5,
    rseq: "CTRYAG",
  },
  sfii: {
    fcut: 8,
    name: "SfiI",
    rcut: 5,
    rseq: "GGCCNNNNNGGCC",
  },
  sfoi: {
    fcut: 3,
    name: "SfoI",
    rcut: 3,
    rseq: "GGCGCC",
  },
  sgrai: {
    fcut: 2,
    name: "SgrAI",
    rcut: 6,
    rseq: "CRCCGGYG",
  },
  smai: {
    fcut: 3,
    name: "SmaI",
    rcut: 3,
    rseq: "CCCGGG",
  },
  smli: {
    fcut: 1,
    name: "SmlI",
    rcut: 5,
    rseq: "CTYRAG",
  },
  snabi: {
    fcut: 3,
    name: "SnaBI",
    rcut: 3,
    rseq: "TACGTA",
  },
  spei: {
    fcut: 1,
    name: "SpeI",
    rcut: 5,
    rseq: "ACTAGT",
  },
  sphi: {
    fcut: 5,
    name: "SphI",
    rcut: 1,
    rseq: "GCATGC",
  },
  srfi: {
    fcut: 4,
    name: "SrfI",
    rcut: 4,
    rseq: "GCCCGGGC",
  },
  sspi: {
    fcut: 3,
    name: "SspI",
    rcut: 3,
    rseq: "AATATT",
  },
  stui: {
    fcut: 3,
    name: "StuI",
    rcut: 3,
    rseq: "AGGCCT",
  },
  styd4i: {
    fcut: 0,
    name: "StyD4I",
    rcut: 5,
    rseq: "CCNGG",
  },
  styi: {
    fcut: 1,
    name: "StyI",
    rcut: 5,
    rseq: "CCWWGG",
  },
  swai: {
    fcut: 4,
    name: "SwaI",
    rcut: 4,
    rseq: "ATTTAAAT",
  },
  taqi: {
    fcut: 1,
    name: "TaqI",
    rcut: 3,
    rseq: "TCGA",
  },
  tfii: {
    fcut: 1,
    name: "TfiI",
    rcut: 4,
    rseq: "GAWTC",
  },
  tsei: {
    fcut: 1,
    name: "TseI",
    rcut: 4,
    rseq: "GCWGC",
  },
  tsp45i: {
    fcut: 0,
    name: "Tsp45I",
    rcut: 5,
    rseq: "GTSAC",
  },
  tspmi: {
    fcut: 1,
    name: "TspMI",
    rcut: 5,
    rseq: "CCCGGG",
  },
  tspri: {
    fcut: 9,
    name: "TspRI",
    rcut: 0,
    rseq: "NNCASTGNN",
  },
  tth111i: {
    fcut: 4,
    name: "Tth111I",
    rcut: 5,
    rseq: "GACNNNGTC",
  },
  xbai: {
    fcut: 1,
    name: "XbaI",
    rcut: 5,
    rseq: "TCTAGA",
  },
  xcmi: {
    fcut: 8,
    name: "XcmI",
    rcut: 7,
    rseq: "CCANNNNNNNNNTGG",
  },
  xhoi: {
    fcut: 1,
    name: "XhoI",
    rcut: 5,
    rseq: "CTCGAG",
  },
  xmai: {
    fcut: 1,
    name: "XmaI",
    rcut: 5,
    rseq: "CCCGGG",
  },
  xmni: {
    fcut: 5,
    name: "XmnI",
    rcut: 5,
    rseq: "GAANNNNTTC",
  },
  zrai: {
    fcut: 3,
    name: "ZraI",
    rcut: 3,
    rseq: "GACGTC",
  },
};

export default enzymes;