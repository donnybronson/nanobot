if (Facts.find().count() === 0) {

Facts.insert({
    title: 'Milk',
    url: 'http://www.dairyuk.org/industry-overview/consumption-sales',
    si: 'ltr'
  })

  Facts.insert({
    title: 'eggs',
    url: 'https://www.egginfo.co.uk/egg-facts-and-figures/industry-information/data',
    si: 'integer'
  })

  Facts.insert({
    title: 'cheese',
    url: 'http://www.cheeseboard.co.uk/facts/top_cheese_facts-2',
    si: 'g'
  });

}
