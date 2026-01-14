<template>
  <div class="migrate-apply-refund wp">
    <h2>Apply for Refund</h2>

    <section class="panel">
      <div class="panel-title">Select refund type</div>
      <el-radio-group v-model="refundType">
        <el-radio label="confirm">Confirm refund</el-radio>
        <el-radio label="estimate">Estimate refund amount only</el-radio>
      </el-radio-group>
    </section>

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
          </tr>
        </tbody>
      </table>
    </section>

    <section class="panel">
      <div class="panel-title">Reason and options</div>
      <el-radio-group v-model="reason">
        <el-radio label="voluntary">Voluntary</el-radio>
        <el-radio label="involuntary">Involuntary</el-radio>
        <el-radio label="other">Other</el-radio>
      </el-radio-group>

      <div style="margin-top:12px">
        <el-checkbox-group v-model="additionalOptions">
          <el-checkbox label="returnEmd">Return EMD</el-checkbox>
          <el-checkbox label="specialApproval">Special approval</el-checkbox>
          <el-checkbox label="ticketInvalid">Ticket invalid</el-checkbox>
          <el-checkbox label="positiveTest">Positive test</el-checkbox>
        </el-checkbox-group>
      </div>

      <div style="margin-top:12px">
        <el-input type="textarea" v-model="notes" placeholder="Notes" rows="4"/>
      </div>
    </section>

    <section class="panel">
      <div class="panel-title">Attachments</div>
      <el-upload action="#" :auto-upload="false" :on-change="handleFileChange" multiple>
        <el-button size="small">Click to upload</el-button>
      </el-upload>
    </section>

    <section class="panel">
      <div class="panel-title">Contact information</div>
      <el-input v-model="contact.name" placeholder="Name" style="margin-bottom:8px"/>
      <el-input v-model="contact.phone" placeholder="Telephone" style="margin-bottom:8px"/>
      <el-input v-model="contact.email" placeholder="Email /QQ/Skype"/>
    </section>

    <div class="panel actions tr">
      <el-button @click="cancel" plain>Cancel</el-button>
      <el-button type="primary" @click="submitRefund">Submit</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const refundType = ref('confirm')

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
  { id: 1, seq: 1, airline: 'OZ', flight: 'QZ222', cabin: 'V', depart: 'ICN', arrive: 'JFK', date: '2026-02-14' },
  { id: 2, seq: 2, airline: 'OZ', flight: 'QZ223', cabin: 'V', depart: 'ICN', arrive: 'JFK', date: '2026-02-14' }
])
const selectedSegmentIds = ref([])

const reason = ref('voluntary')
const additionalOptions = ref([])
const notes = ref('')
const uploadedFiles = ref([])
function handleFileChange(file, fileList) {
  uploadedFiles.value = fileList
}

const contact = ref({ name: '', phone: '', email: '' })

function validate() {
  if (!selectedPassengerIds.value.length) return 'Please select at least one passenger.'
  if (!selectedSegmentIds.value.length) return 'Please select at least one segment.'
  if (!contact.value.name || !contact.value.phone) return 'Please provide contact name and phone.'
  return ''
}

function submitRefund() {
  const err = validate()
  if (err) return (window as any).$message?.error ? (window as any).$message.error(err) : alert(err)
  // mock submit
  console.log('submit refund', {
    passengers: selectedPassengerIds.value,
    segments: selectedSegmentIds.value,
    reason: reason.value,
    options: additionalOptions.value,
    contact: contact.value,
    notes: notes.value
  })
  (window as any).$message?.success ? (window as any).$message.success('Refund application submitted.') : alert('Refund application submitted.')
}

function cancel() { window.history.back() }
</script>

<style scoped>
.wp{padding:16px}
.panel{border:1px solid #eee;padding:12px;margin-bottom:12px}
.panel-title{font-weight:600;margin-bottom:8px}
.simple-table{width:100%;border-collapse:collapse}
.simple-table th,.simple-table td{border:1px solid #eee;padding:8px;text-align:left}
.actions{margin-top:8px}
.tr{text-align:right}
</style>
