<template>
  <div class="migrate-apply-change wp">
    <h2>Apply for Rescheduling</h2>

    <section class="panel">
      <div class="panel-title">Select passengers</div>
      <table class="simple-table">
        <thead>
          <tr>
            <th><input type="checkbox" :checked="allPassengersSelected" @change="toggleSelectAllPassengers($event)"/></th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Nationality</th>
            <th>Type</th>
            <th>ID No</th>
            <th>Ticket No</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in passengers" :key="p.id">
            <td><input type="checkbox" :value="p.id" v-model="selectedPassengerIds"/></td>
            <td>{{ p.name }}</td>
            <td>{{ p.gender }}</td>
            <td>{{ p.dob }}</td>
            <td>{{ p.nationality }}</td>
            <td>{{ p.type }}</td>
            <td>{{ p.idNo }}</td>
            <td>{{ p.ticket }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <div class="panel-title">Select flight segments</div>
      <table class="simple-table">
        <thead>
          <tr>
            <th></th>
            <th>Segment</th>
            <th>Airline</th>
            <th>Flight</th>
            <th>Cabin</th>
            <th>Depart</th>
            <th>Arrive</th>
            <th>Flight date</th>
            <th>Rescheduled date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="seg in segments" :key="seg.id">
            <td><input type="checkbox" :value="seg.id" v-model="selectedSegmentIds"/></td>
            <td>{{ seg.seq }}</td>
            <td>{{ seg.airline }}</td>
            <td>{{ seg.flight }}</td>
            <td>{{ seg.cabin }}</td>
            <td>{{ seg.depart }}</td>
            <td>{{ seg.arrive }}</td>
            <td>{{ seg.date }}</td>
            <td><el-date-picker v-model="seg.newDate" type="date" value-format="yyyy-MM-dd" placeholder="New date"/></td>
          </tr>
        </tbody>
      </table>
      <div class="actions">
        <el-button @click="searchAlternatives" type="primary">Search</el-button>
        <el-button @click="fillManually">Fill in manually</el-button>
      </div>
    </section>

    <section class="panel">
      <div class="panel-title">Reason and attachments</div>
      <el-radio-group v-model="reasonType">
        <el-radio label="voluntary">Voluntary rescheduling</el-radio>
        <el-radio label="involuntary">Involuntary rescheduling</el-radio>
      </el-radio-group>

      <div style="margin-top:12px">
        <el-upload
          action="#"
          :auto-upload="false"
          :on-change="handleFileChange"
          multiple
        >
          <el-button size="small">Click to upload</el-button>
        </el-upload>
      </div>
    </section>

    <section class="panel">
      <div class="panel-title">Contact information</div>
      <el-input v-model="contact.name" placeholder="Name" style="margin-bottom:8px"/>
      <el-input v-model="contact.phone" placeholder="Telephone" style="margin-bottom:8px"/>
      <el-input v-model="contact.email" placeholder="Email / QQ / Skype"/>
    </section>

    <section class="panel">
      <div class="panel-title">Remarks</div>
      <el-input type="textarea" v-model="remarks" placeholder="Remarks" rows="4"/>
      <p class="hint">Please submit at least 3 days before departure for best results.</p>
    </section>

    <div class="panel actions tr">
      <el-button @click="cancel" plain>Cancel</el-button>
      <el-button type="primary" @click="submitApplication">Submit</el-button>
    </div>

    <el-dialog v-model="showAlternatives" width="720px" title="Available alternatives">
      <div v-if="alternativeFlights.length">
        <div v-for="f in alternativeFlights" :key="f.id" class="alt-flight">
          <div><strong>{{ f.flight }}</strong> — {{ f.depart }} → {{ f.arrive }} on {{ f.date }}</div>
          <div>Price: ¥{{ f.price }}</div>
          <el-button type="primary" size="mini" @click="selectAlternative(f)">Select</el-button>
        </div>
      </div>
      <div v-else>
        <p>No alternatives found.</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showAlternatives = false">Close</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const passengers = ref([
  { id: 1, name: 'ONG/XUE', gender: 'FEMALE', dob: '1989-07-08', nationality: 'CN', type: 'ADULT', idNo: 'EJ1355350', ticket: '9887386246495' }
])
const selectedPassengerIds = ref([])
const allPassengersSelected = computed(() => passengers.value.length > 0 && selectedPassengerIds.value.length === passengers.value.length)
function toggleSelectAllPassengers(e) {
  const checked = e.target.checked
  if (checked) selectedPassengerIds.value = passengers.value.map(p => p.id)
  else selectedPassengerIds.value = []
}

const segments = ref([
  { id: 1, seq: 1, airline: 'OZ', flight: 'QZ222', cabin: 'V', depart: 'ICN', arrive: 'JFK', date: '2026-02-14', newDate: '2026-02-15' },
  { id: 2, seq: 2, airline: 'OZ', flight: 'QZ223', cabin: 'V', depart: 'ICN', arrive: 'JFK', date: '2026-02-14', newDate: '' }
])
const selectedSegmentIds = ref([])

const reasonType = ref('voluntary')
const uploadedFiles = ref([])
function handleFileChange(file, fileList) {
  uploadedFiles.value = fileList
}

const contact = ref({ name: '', phone: '', email: '' })
const remarks = ref('')

const showAlternatives = ref(false)
const alternativeFlights = ref([])

function searchAlternatives() {
  // mock result
  alternativeFlights.value = [
    { id: 1, flight: 'DL998', depart: 'MIA', arrive: 'BOS', date: '2026-01-09', price: 1200 },
    { id: 2, flight: 'AA200', depart: 'MIA', arrive: 'BOS', date: '2026-01-09', price: 1100 }
  ]
  showAlternatives.value = true
}

function selectAlternative(f) {
  // attach selection to first selected segment (simple behavior)
  if (selectedSegmentIds.value.length) {
    const segId = selectedSegmentIds.value[0]
    const seg = segments.value.find(s => s.id === segId)
    if (seg) {
      seg.newDate = f.date
    }
  }
  showAlternatives.value = false
}

function fillManually() {
  // noop for now
  // could open a manual input dialog in future
}

function validate() {
  if (!selectedPassengerIds.value.length) return 'Please select at least one passenger.'
  if (!selectedSegmentIds.value.length) return 'Please select at least one flight segment to reschedule.'
  if (!contact.value.name || !contact.value.phone) return 'Please provide contact name and phone.'
  return ''
}

function submitApplication() {
  const err = validate()
  if (err) {
    return (window as any).$message?.error ? (window as any).$message.error(err) : alert(err)
  }
  // mock submit
  console.log('submit reschedule', {
    passengers: selectedPassengerIds.value,
    segments: selectedSegmentIds.value,
    reasons: reasonType.value,
    contact: contact.value,
    remarks: remarks.value
  })
  (window as any).$message?.success ? (window as any).$message.success('Reschedule application submitted.') : alert('Reschedule application submitted.')
}

function cancel() {
  // navigate back or reset
  window.history.back()
}

</script>

<style scoped>
.wp{padding:16px}
.panel{border:1px solid #eee;padding:12px;margin-bottom:12px}
.panel-title{font-weight:600;margin-bottom:8px}
.simple-table{width:100%;border-collapse:collapse}
.simple-table th,.simple-table td{border:1px solid #eee;padding:8px;text-align:left}
.actions{margin-top:8px}
.tr{text-align:right}
.hint{color:#999;font-size:12px;margin-top:8px}
.alt-flight{padding:8px;border-bottom:1px dashed #eee}
</style>
