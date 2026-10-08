/*
 * Phee Hudson: artwork catalogue for the redesign prototypes.
 *
 * Everything here was copied from the live site (phillipahudson.com, run on
 * ArtSites.ca) in October 2026. Images are loaded straight from her current
 * site, so nothing is duplicated and every picture is her own upload.
 *
 * In a finished site this file would be generated from a CMS (see README).
 * Each entry is [imageFile, cacheStamp, title].
 */
(function () {
  const BASE = "https://phillipahudson.com/works/phillipahudson/resized/";

  function img(file, cache, size) {
    return BASE + file + "." + (size || "w600h600") + ".jpg?cache=" + cache;
  }

  function build(list, extra) {
    return list.map(([file, cache, title, more]) =>
      Object.assign(
        {
          id: file,
          title: title,
          src: img(file, cache),
          large: img(file, cache, "w1600h1600"),
        },
        extra || {},
        more || {}
      )
    );
  }

  const available = [
    ["lake_louise_3", 1790536283, "Lake Louise"],
    ["img_3353", 1790535487, "Athabasca Glacier and the Columbia Icefield"],
    ["img_3316", 1790535456, "Mt Athabasca from Wilcox Pass"],
    ["img_5821", 1752263986, "Kananaskis Country, Alberta"],
    ["img_5819", 1752263999, "Peyto Lake"],
    ["img_3564_1", 1730148940, "Tombstone Mountain, Yukon, from the air"],
    ["river_of_ice_in_the_coast_range_beyond_pemberton", 1655486083, "River of Ice, Coast Range beyond Pemberton"],
    ["snowy_owl_in_the_alberta_foothills", 1730148990, "Snowy Owl in the Alberta Foothills"],
    ["5_self_portrait_larch_valley", 1655486047, "Hiking above Larch Valley, Moraine Lake"],
  ];

  const newWork = [
    ["img_3493", 1791051844, "Winter scene, Lake Louise and Mt Victoria"],
    ["img_3494", 1791051790, "Moraine Lake, Valley of the Ten Peaks"],
    ["img_0010", 1790536160, "Lake Louise in the winter"],
    ["img_1655", 1784824724, "Mt St Elias"],
    ["img_1653", 1784824655, "Denali"],
    ["img_1656", 1784824686, "Mt Logan"],
    ["img_0043_2", 1784823037, "Kaskawalsh Glacier, Yukon"],
    ["early_morning_mists", 1763394351, "Early Morning Mists"],
    ["img_5827", 1784821898, "Cascade Mountain"],
    ["img_5826", 1784821847, "Lovely Lake MacArthur"],
    ["img_5823", 1784821864, "Bow Lake"],
    ["img_5817", 1763394298, "Three Sisters and the Bow River"],
    ["mt_waddington", 1744159790, "Mt Waddington"],
    ["img_3935", 1763394074, "Spirit Island and Maligne Lake near Jasper"],
    ["img_3790", 1784821838, "Mt Assiniboine in the Fall"],
    ["moraine_lake_valley_of_the_ten_peaks", 1784821829, "Moraine Lake, Valley of the Ten Peaks"],
    ["lake_macarthur", 1784822117, "Lake MacArthur"],
    ["three_sisters", 1784821807, "The Three Sisters, Canmore"],
    ["rundle", 1742320008, "Mt Rundle"],
    ["img_0411", 1739825685, "Mt Nelson, Columbia River Valley"],
    ["bow_lake", 1784821928, "Bow Lake and the Crowfoot Glacier"],
    ["lake_louise_2", 1742320025, "Lake Louise"],
    ["img_0381", 1742320052, "In the Alpine"],
    ["img_0350", 1784821817, "Garibaldi near Squamish"],
    ["asulkan_col_at_roger_s_pass", 1701821461, "Asulkan Col at Rogers Pass"],
    ["magnificent_mt_temple_at_lake_louise", 1655499702, "Magnificent Mt Temple at Lake Louise"],
    ["lake_louise_from_the_path_around_the_lake_2", 1790535307, "Lake Louise from the lakeshore path"],
    ["pedley_ridge_walk_in_the_columbia_valley", 1701821579, "Pedley Ridge walk, Columbia Valley"],
    ["snowy_owl_and_the_alberta_foothills", 1652137792, "Snowy Owl and the Alberta Foothills"],
    ["emerald_lake_and_mt_burgess", 1655835658, "Emerald Lake and Mt Burgess"],
    ["lake_louise", 1660688666, "Lake Louise and Mt Victoria"],
    ["emerald_lake", 1790535966, "Emerald Lake"],
    ["img_3611_1", 1655485985, "Above the mist"],
    ["light_catching_the_slopes_of_assiniboine", 1592331834, "Light catching the slopes of Assiniboine"],
    ["sunrise_on_cougar_mountain", 1710281782, "Sunrise on Cougar Mountain"],
  ];

  const mountains = [
    ["albert_edward", 1763394109, "Albert Edward"],
    ["img_3932", 1784822138, "Last Light on Mt Baker"],
    ["img_0377", 1739825956, "Moraine Lake, Banff National Park"],
    ["img_3302", 1716135685, "Floe Lake, Kootenay National Park"],
    ["mountain_meadows", 1734112006, "Mountain Meadows"],
    ["icefields_parkway", 1745260722, "Icefields Parkway"],
    ["img_3846", 1646844619, "Coast Range, BC"],
    ["img_3836", 1646844604, "Bow Lake, Icefields Parkway"],
    ["img_3831", 1646844593, "First light"],
    ["img_3830", 1652131680, "Beautiful day in the alpine"],
    ["img_3829", 1646844559, "Salal Creek from Athelney Pass"],
    ["fall_in_the_mountains", 1710281653, "Fall in the mountains"],
    ["alberta_foothills", 1710281815, "Alberta foothills"],
    ["spirit_island_and_maligne_lake", 1652131754, "Spirit Island and Maligne Lake"],
    ["alpen_glow_on_mount_garabaldi", 1619153296, "Alpenglow on Mount Garibaldi"],
    ["bow_lake_on_the_icefields_parkway", 1652131777, "Bow Lake on the Icefields Parkway"],
    ["img_0640", 1619153159, "Mount Rundle, Banff National Park"],
    ["img_0774", 1619153099, "Backcountry skiing in the Purcells"],
    ["img_0852", 1619153047, "Seven Sisters Range near Terrace"],
    ["img_0822", 1619152994, "Powder skiing on a bluebird day"],
    ["asulkan_valley_at_roger_s_pass_glacier_national_park", 1710281840, "Asulkan Valley, Glacier National Park"],
    ["img_9990", 1784822045, "Fall in the Coast Range"],
    ["swiss_3", 1606505447, "Swiss Mountain #3"],
    ["mt_waddington_bc_coast_range", 1652131829, "Mt Waddington, BC Coast Range"],
    ["sunrise_on_mica_mountain_near_tete_jaune_cache", 1585764290, "Sunrise on Mica Mountain"],
    ["img_8220", 1652131856, "Meadows high above the Whistler Valley"],
    ["img_8227", 1652131875, "Twilight at Mt Baker"],
    ["img_8358", 1652131909, "Larches at Floe Lake"],
    ["lofty_peaks", 1652131937, "Lofty Peaks"],
    ["lake_o_hara", 1652131999, "Lake O'Hara"],
    ["first_snow_on_mt_rundle", 1710281790, "First snow on Mt Rundle"],
    ["on_the_trail_to_oesa_at_lake_o_hara", 1652131968, "On the trail to Oesa at Lake O'Hara"],
    ["forget_me_not_pond_and_mt_glascow", 1652132032, "Forget-me-not Pond and Mt Glasgow"],
    ["mt_robson", 1790535858, "Mt Robson"],
    ["tantalus_mountains", 1570464880, "Tantalus Mountains"],
    ["10_phillipa_hudson_mt_edith_cavell", 1790535928, "Mt Edith Cavell from Cavell Lake"],
    ["8_phillipa_hudson_garabaldi", 1652131534, "Mt Garibaldi from Elfin Lakes"],
    ["dawn_on_the_golden_hinde_vancouver_island_s_highest_mountain", 1529712724, "Dawn on the Golden Hinde"],
    ["img_4921", 1543190524, "Triple Peak"],
    ["img_0966", 1652131652, "Castle Mountain near Banff"],
    ["img_0923", 1701821448, "Mt Yamnuska near Canmore"],
    ["img_7715", 1734111924, "Patterns of snow, from the Alaska Highway"],
    ["bugaboos_12_x_12", 1526071656, "Bugaboo Spires and Cobalt Lake"],
    ["img_4475", 1526071616, "Strathcona Park skyline"],
    ["img_1569", 1639079133, "Mount Robson at sunset with Berg Lake"],
    ["img_0150", 1784822338, "Mt Babel and Mt Fay"],
    ["img_6413", 1526083019, "The Ramparts and Amethyst Lake"],
    ["img_5068", 1639077834, "Alpenglow in the South Chilcotin"],
    ["chorten_in_the_thame_valley_nepal", 1381447940, "Chorten in the Thame Valley, Nepal"],
    ["torres_del_paine", 1526083566, "Cuernos del Paine"],
  ];

  const seascapes = [
    ["img_3434", 1775851781, "Sunset in the San Juans"],
    ["img_3400", 1775851700, "Maui waves"],
    ["img_3933", 1767812237, "West Coast Shoreline"],
    ["img_3658", 1767812293, "Golden Sand, Tofino"],
    ["number_10", 1739822821, "Long Beach Low Tide"],
    ["img_2891_1_2", 1734112086, "Essaouira, Morocco"],
    ["img_4624", 1734111956, "Salish Orcas"],
    ["number_12", 1739822921, "Vancouver Island west coast"],
    ["number_11", 1739822959, "Long Beach, Pacific Rim National Park"],
    ["number_15", 1739823071, "Schooner Cove Beach"],
    ["number_14", 1739822897, "Schooner Cove Island"],
    ["number_13", 1739822946, "Florencia Beach"],
    ["china_cove_at_point_lobos_california", 1652137175, "China Cove at Point Lobos"],
    ["broughton_archipelago", 1639092438, "Broughton Archipelago"],
    ["img_7389", 1639091967, "Up the coast, BC"],
    ["img_7273", 1639091982, "Calvert Island"],
    ["img_8317", 1639091995, "Pat Bay winter sunset"],
    ["img_8312", 1639092006, "Coastal reflections"],
    ["img_8307", 1639092022, "Gulf Island summer, Pirates Cove"],
    ["img_8344", 1639092036, "Summer time at Sidney Spit"],
    ["img_5363", 1559075764, "Wolf Track Beach, Campania Island"],
    ["img_6300", 1639092058, "Westcoast Magic"],
    ["img_6347", 1639092076, "Patterns in the sand, low tide"],
    ["img_8217", 1639092094, "Westcoast pocket beach"],
    ["img_8396", 1639092110, "Tofino beach"],
    ["misty_west_coast", 1639092128, "Misty west coast"],
    ["french_beach", 1526071688, "French Beach, Vancouver Island"],
    ["img_3295", 1526071791, "Nootka Island Beach"],
    ["img_3297", 1526071829, "Tofino Twilight"],
    ["img_3326", 1639092192, "Tidelines, BC Coast"],
    ["img_3325", 1526071859, "Mt Baker and Sidney Spit"],
    ["img_1551", 1526083215, "Marshes at low tide, Haida Gwaii"],
    ["img_8482", 1639092242, "Golden trees and rockweed"],
    ["last_light_west_coast_beach", 1526083831, "Last light, west coast beach"],
    ["island_reflections", 1639092263, "Island Reflections"],
    ["clear_blue_sea_broughton_archipeligo", 1639092286, "Clear blue sea, Broughton Archipelago"],
    ["misty_morning_near_fury_cove", 1639092340, "Misty morning near Fury Cove"],
    ["broken_group_island_reflections", 1526083803, "Broken Group Island reflections"],
  ];

  // Giclee print prices were only checked for one work (Lake Louise in the
  // winter); the same four sizes are shown on all prints in these prototypes.
  const printSizes = [
    { size: '40" × 30"', price: 925 },
    { size: '24" × 32"', price: 725 },
    { size: '24" × 18"', price: 575 },
    { size: '10.5" × 14"', price: 275 },
  ];

  const prints = [
    ["img_0010", 1790536160, "Lake Louise in the winter"],
    ["img_3316", 1790535456, "Mt Athabasca from Wilcox Pass"],
    ["img_3353", 1790535487, "Athabasca Glacier and the Columbia Icefield"],
    ["lake_louise_from_the_path_around_the_lake_2", 1790535307, "Lake Louise from the lakeshore path"],
    ["emerald_lake", 1790535966, "Emerald Lake"],
    ["assiniboine_2", 1790535539, "Assiniboine in the fall"],
    ["mt_robson", 1790535858, "Mt Robson"],
    ["mt_rundle_36x48", 1790536030, "Mt Rundle"],
    ["moraine_lake_36x48_copy", 1790536114, "Moraine Lake"],
    ["10_phillipa_hudson_mt_edith_cavell", 1790535928, "Mt Edith Cavell from Cavell Lake"],
    ["three_sisiters_canmore_36x48", 1790535722, "Three Sisters, Canmore"],
    ["macarthur_lake_36x48_copy", 1790535684, "MacArthur Lake near Lake O'Hara"],
    ["lake_louise_36x48", 1790535647, "Lake Louise"],
    ["maligne_lake_and_spirit_island1", 1790535601, "Maligne Lake and Spirit Island"],
  ];

  const lakeLouise = [
    ["lake_mcarthur_near_lake_o_hara", 1485821229, "Lake McArthur near Lake O'Hara"],
    ["painting_a_very_large_canvas", 1485821261, "The Three Sisters behind Canmore"],
    ["mt_rundle_behind_banff", 1485821286, "Mt Rundle behind Banff"],
  ];

  const availableIds = new Set(available.map((a) => a[0]));

  window.PHEE = {
    img,
    collections: [
      { key: "available", name: "Available Originals", blurb: "Original acrylics currently available. Ask about any of them.", works: build(available, { status: "available" }) },
      { key: "new", name: "New Paintings", blurb: "Recently completed work.", works: build(newWork) },
      { key: "mountains", name: "Mountains", blurb: "The Rockies, the Coast Range and the high country, in acrylic.", works: build(mountains) },
      { key: "coast", name: "Coast & Sea", blurb: "Beaches, inlets and islands of the BC coast and beyond.", works: build(seascapes) },
      { key: "prints", name: "Limited Edition Prints", blurb: "Giclée prints on canvas, numbered editions of 100, each with a certificate of authenticity.", works: build(prints, { prints: printSizes }) },
      { key: "lakelouise", name: "The Lake Louise Commission", blurb: "Three 6' × 8' canvases for the lobby of the Fairmont Chateau Lake Louise, 2013.", works: build(lakeLouise) },
    ],
    isAvailable: (w) => availableIds.has(w.id),
    hero: [
      ["img_3493", 1791051844, "Winter scene, Lake Louise and Mt Victoria"],
      ["img_3434", 1775851781, "Sunset in the San Juans"],
      ["img_3790", 1784821838, "Mt Assiniboine in the Fall"],
      ["img_3658", 1767812293, "Golden Sand, Tofino"],
      ["img_1656", 1784824686, "Mt Logan"],
    ].map(([f, c, t]) => ({ title: t, src: img(f, c), large: img(f, c, "w2000h2000") })),
    artist: {
      name: "Phillipa Hudson",
      known: "Phee Hudson",
      postnominal: "SFCA",
      email: "pheehudson@gmail.com",
      phone: "250 888 9891",
      instagram: "https://www.instagram.com/pheehudson/",
      facebook: "http://facebook.com/Phillipa-Phee-Hudson-SFCA-Art-Page-264932300308082",
      portraits: {
        ski: "https://phillipahudson.com/works/phillipahudson/resized/ski_2.w450h450.jpg",
        portrait: "https://phillipahudson.com/works/phillipahudson/resized/portrait_3.w450h450.jpg",
        kayak: "https://phillipahudson.com/works/phillipahudson/resized/kayak_1.w450h450.jpg",
      },
    },
  };
})();
