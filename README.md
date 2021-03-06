### hunter - Leche Asada - Graffi.so
======

### Purpose:
To find graffiti/street art hot-spots in cities around the world

### Conditions:
 - Do the above with pre-existing datasources
 - Maintain accuracy to 90% for revelance of content (A nine in ten chance that a point is actually related to street art)
 - Maintain geospatial accuracy to 90% that a point falls within 500 yards of it's actual location (Very difficult to verify and very dependent on externalities)

### Priority:
 - Animate title with D3
 - User instructions
 - Nav bar
 - Separate out data_ingesting from Entry model
 - Add slick

### Things to get back to:
 - randomise pretty line, for both instances
 - Build title with d3 (MAINTAIN!)
 - Sort out proper colour scheme
 - Consider caching the random_images returns...
 - Consider blurred graff texture as background
 - Some sort of progress bar or indication of loading activity
 - Add unicorn-worker-killer

### Done:
 - Add spork and factorygirl to facilitate testing
 - Build data-miner-tag
 - Sort out some sort of chron job to collect the datas off IG
 - Build data-miner-user
 - Extend data-miner-user to grab all records from a user
 - See if Geocoder can determine the promixity of DB entries to one another
 - IF GEOCODE WORKS: Add promixity to the Entry table
 - Figure out what can be tested next
 - Consider implementing a paginating capture of the tag/recent/media
 - Get the most basic of D3 maps running
 - Look at Google Map API to see if I can get the zooming range to expand (DEFACTO fixed because I changed the map type to ROADMAP)
Weed out scores with a low prox score, to avoid displaying shitty data or distracting real data (Currently set to five).
 - Get the prox rake task back up from the git history...I will need it to sort out
 - See if I can do my proxing via :yandex (check Geocoder gem)
 - Get a copy running on Heroku with all the records collected to date.
 - IE, Learn how to grab a postgres data_dump and upload it to Heroku
 - Research and read up on D3
 - Mockup for the display
 - Caching the page and the primary database response, so the page isn't waiting so long for those
 - Make images clickable, with link to their instagram URL
 - scale colour over pretty line
 - Adding a d3 scale to the marker colouring
 - build down arrow (Check out SIMBOL?)
 - Deploy next version of app (v2)
 - Make the images flexible?
 - 1st pass at adding some more mobile friendly stylings
 - Load data up to AWS and point heroku deploy to it
 - Implement caching of feed data (Tried memcache, settled on Redis, still might use Postgres JSON or HSTORE)
 - Need to look at auto-complete and the places library (want to find a cities/towns category)
 - Need to instigate minimum zoom level
 - Look at Google maps API to better understand it
 - Scatter points on mouse over
 - Fix arrow render in Firefox (CSSed it)
 - Transition color on markers from dark to light?
 - Zone out all the results, have them all cache seperately
 - Adjust query field to return the appropriate zones
 - 2nd pass at adding some more mobile friendly stylings
 - Rescale the pretty lines according to page width (sorting out an event listener for window resize)
 - Capture search locations and save in DB for later reference
 - Hstore the DB
 - Optimise database queries and returns (index zone? Use sql intersection)
 - Prime cache
 - Add legend to map
 - Reorganise CSS to use SASS properly
 - Style popup boxes, deh ugly
 - Change after_validation to after_create
 - Avoid broken images/Nuke broken images

### Issues:
 - Takes very long time to run RSPEC... (Assumed to be some issue with JS/D3/Capybara and the static pages. Tests turned off for now)
 - hoover_tag will just start from the beginning again if it covers all of the images with that tag. (preciousgraffiti)
 - Changing zoom level while transitions are taking place means that points get lost
 - CORS still messing me around
 - Fix CORS issues

### Other graffiti projects
  - http://www.streetartview.com/
  - http://www.streetart-community.com/
  - http://geostreetart.com/
  - http://1amsf.com/mobile/about-mobile/

### Leaflet version done list
  - Create separate page for leaflet version
  - Implement display of data
  - Heatmap for overall layer
  - Pick 20 cities to be the random start cities for the app
  - Replicate autocomplete location search using Redis, a city dataset and JS
  - Implement location detection
  - onClick event (look into marker behaviour and see what can be done there)
  - Legend or control?
  - Demunt styles
