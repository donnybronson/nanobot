if (Facts.find().count() === 0) {

Facts.insert({
    title: 'Milk',
    url: 'http://www.dairyuk.org/industry-overview/consumption-sales',
    si: 'ltr',
    group: 'dairy'
  })

  Facts.insert({
    title: 'eggs',
    url: 'https://www.egginfo.co.uk/egg-facts-and-figures/industry-information/data',
    si: 'integer',
    group: 'dairy'
  })

  Facts.insert({
    title: 'cheese',
    url: 'http://www.cheeseboard.co.uk/facts/top_cheese_facts-2',
    si: 'g',
    group: 'dairy'
  })

  Facts.insert({
    title: 'soya',
    url: 'http://www.theecologist.org/green_green_living/food_and_drink/1337453/the_dark_side_of_soya_how_one_super_crop_lost_its_way.html',
    si: 'g',
    group: 'pulses'
  })

  Facts.insert({
    title: 'quorn',
    url: 'https://www.quorn.co.uk/sustainable-nutrition',
    si: 'g',
    group: 'synthetic'
  })
  Facts.insert({
    title: 'crickets',
    url: 'https://edibug.wordpress.com/why-eat-bugs-2/',
    si: 'g',
    group: 'meat'
  })



  Facts.insert({
    title: 'Red meat',
    url: 'https://www.peta.org/about-peta/faq/how-does-eating-meat-harm-the-environment/',
    si: 'g',
    group: 'meat'
  });

}
