var Alexa = require('alexa-sdk');
const makeImage = Alexa.utils.ImageUtils.makeImage;
const makePlainText = Alexa.utils.TextUtils.makePlainText;
const makeRichText = Alexa.utils.TextUtils.makeRichText;


var builder = require('./richtext-builder');

let slideRoom = {
  title: 'Slide Room Operation',
  video: 'https://s3-us-west-2.amazonaws.com/forest-river-videos/videos/Slide+Room+Operation.mp4',
  text: makeRichText(
    builder.create()
    .addLargeFont('Introduction')
    .addParagraph(`Forest River recreational vehicles are equipped with hydraulic or electric slide out systems, or a combination of both. In this manual, you will find general information that will pertain to all operations, and in addition, some more brand specific information. If the following procedure doesn't apply to your recreational vehicle, please consult the slide room manufacturer's owner's manual that you received with your recreational vehicle and follow those directions.`)
    .addParagraph(`Before extending the room, check the exterior of the RV to be sure the room will not hit anything outside when it is fully extended and the interior to be sure the slide room travel is free from obstruction.`)
    .addBoldParagraph('NOTE:')
    .addBoldParagraph('We recommend that your RV be plugged into a 120VAC receptacle or have the generator running, during jack and slide out operation. This will help ensure that the battery maintains proper voltage during operation.')
    .addBoldParagraph('For optimum performance, the slide out system requires full battery current and voltage. The battery must be maintained at full capacity. If the battery is fully charged and you still do not have power, check the terminals and other connections at the battery.')
    .addLineBreak()
    .addBoldParagraph('WARNING!')
    .addParagraph('Do not perform any maintenance work on your slide out system without first disconnecting the battery. Failure to do so could result in serious personal injury or death.')
    .addBoldParagraph('NOTE:')
    .addBoldParagraph(`When operating the slide room, be sure there are no obstructions in the travel path.  For more information, please consult the individual owner's manual `)
    .addBoldParagraph(`Your RV may not be equipped with a manual crank. Please contact your dealer for more information.`)
    .addLineBreak()
    .addLineBreak()
    .addLargeFont('Power Failure')
    .addParagraph(`In the event of a power failure or low battery, the slide out room may be operated manually with a crank handle. (If you do not have one, you may order one from your Forest River dealer.) The manual crank shaft is located on the motor transmission housing. Turn the crank counter-clockwise to move the room IN and clockwise to move the room OUT.`)
    .addBoldParagraph('NOTE:')
    .addBoldParagraph(`Do not make modifications to your recreational vehicle by adding after-market items (gooseneck adapters, hitches, bike racks, ladders, storage racks, etc.) without first obtaining written authorization from Forest River Inc. Doing so may cause damage to your RV and limit, reduce, or void your warranty.`)
    .buildText()
  )
}

let freshWaterTank = {
  title: 'Fresh Water Holding Tank',
  text: makeRichText(
    builder.create()
    .addLargeFont('Introduction')
    .addParagraph(`Due to the vast array of floor plans and the necessary rearranging of plumbing systems, locations will alter, but in general, the holding tanks are located approximately beneath the bathroom area. Drain valves and drain hose storage are usually located on the driver's side.`)
    .buildText())
};

let waterPump = {
  title: 'Water Pump',
  text: makeRichText(
    builder.create()
    .addLargeFont('Water Pump Care and Operation')
    .addParagraph(`Frequent pump cycling may be caused by excessive pressure created by one or more of the following within the plumbing system:`)
    .buildText())
};

let waterSystemMaintenance = {
  title: 'Water System Maintenance and Troubleshooting',
  text: makeRichText(
    builder.create()
    .addLargeFont('Overview')
    .addParagraph(`As with any mechanical system, your plumbing is subject to the development of problems. Most of these problems can be greatly reduced, if not eliminated, by following a schedule of planned inspections and maintenance. Neglect of proper maintenance procedures is the usual cause of most water system problems.`)
    .buildText())
};



// I want to use this topic as the example that we show a list:

// So when the user asks "help me with my water tank"
// Alexa says "i found more than one results for water tank. You can choose from the list on the screen"

// Screen displays 4 items in the list:
// - Checking Water Tank Levels                                     Video (icon?)
// - Fresh Water Holding Tank                                         Owner Manual (icon?)
// - Water Pump                                                               Owner Manual (icon)
// - Water System Maintenance and Troubleshooting     Owner Manual (icon)

let documents = {
  'water tank': [waterSystemMaintenance, waterPump, freshWaterTank],
  'slide room operation': [slideRoom],
  'fresh water holding tank': [freshWaterTank],
  'water system maintenance and troubleshooting': [waterSystemMaintenance],
  'water pump': [waterPump]
};


module.exports = {
  getDocumentFor: function(key) {

    return documents[key.toLowerCase()] || [];
  }
}